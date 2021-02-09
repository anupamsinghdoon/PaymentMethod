// This is your new function. To start, set the name and path on the left.

exports.bank = async function (context, event, callback) {
    try {
        let Response = {
            "actions": [
                {
                    "say": "ok, we will take your payment using eCheck by phone."
                },
                {
                    "remember": {
                        "PmtType": "2"
                    }
                }
            ]
        }
        console.log("Bank Response:" + JSON.stringify(Response));
        callback(null, Response);

    } catch (error) {
        console.error(error);
        callback(error);
    }
};
