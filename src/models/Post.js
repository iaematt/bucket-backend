const mongoose = require('mongoose');
const aws = require('aws-sdk'); 
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    session: String,
    createAt: {
        type: Date,
        default: Date.now
    },
});

PostSchema.pre('save', function() {
    if (!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
});

PostSchema.pre('remove', function() {
    if (process.env.STORAGE_TYPE === 's3') {
        return s3
            .deleteObject({
                Bucket: 'uploadpost133',
                Key: this.key
            })
            .promise()
            .then(response => {
                console.log(response.status);
            })
            .catch(response => {
                console.log(response.staus);
            });
    } else {
        return promisify(fs.unlink)(
            path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
        );
    }
});

module.exports = mongoose.model("Post", PostSchema);