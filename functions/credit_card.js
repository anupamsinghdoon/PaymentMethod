// This is your new function. To start, set the name and path on the left.

exports.credit_card = async function (context, event, callback) {
    try {
        let Response = {
            "actions": [
                {
                    "say": "ok, we will take your payment by credit or debit card"
                },
                {
                    "remember": {
                        "PmtType": "1"
                    }
                }
            ]
        }
        console.log("Credit Response:" + JSON.stringify(Response));
        callback(null, Response);

    } catch (error) {
        console.error(error);
        callback(error);
    }
};
