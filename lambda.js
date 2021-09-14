var AWS = require("aws-sdk")

exports.handler = async (event) => {
    var sns = new AWS.SNS();
    var params = {
        Message: event.message,
        MessageStructure: 'string',
        PhoneNumber: event.number,
        Subject: event.subject
    };
    
    sns.publish(params, function(err, data){
        if(err) console.log(err, err.stack);
        else return data;
    });
};
