const functions = Runtime.getFunctions();
let fallback = require(functions['fallback'].path);
let agent_transfer = require(functions['agent_transfer'].path);
let bank = require(functions['bank'].path);
let credit_card = require(functions['credit_card'].path);

exports.handler = async (context, event, callback) => {
  console.log("index");
  const { CurrentTask } = event;
  const { CurrentInput } = event;
  const { CurrentTaskConfidence } = event;
  console.log("CurrentInput " + CurrentInput + ", CurrentTask: " + CurrentTask + ", CurrentTaskConfidence: " + CurrentTaskConfidence + "\n");

  // calling task handlers
  if (Number(CurrentTaskConfidence) === 1 || Number(CurrentTaskConfidence) === 0) {
    switch (CurrentTask) {
      case 'bank':
        {
          console.log("CurrentTask: " + CurrentTask);
          await bank.bank(context, event, callback);
          break;
        }
        case 'credit_card':
        {
          console.log("CurrentTask: " + CurrentTask);
          await credit_card.credit_card(context, event, callback);
          break;
        }
      case 'agent_transfer':
        {
          console.log("CurrentTask: " + CurrentTask);
          await agent_transfer.agent_transfer(context, event, callback);
          break;
        }
      case 'fallback':
        {
          console.log("CurrentTask: " + CurrentTask);
          await fallback.fallback(context, event, callback);
          break;
        }
      default:
        console.log("CurrentTask: " + CurrentTask);
        await fallback.fallback(context, event, callback);
        break;
    }
  }
  else {
    console.log("Fallback_CurrentTask from Else: " + CurrentTask);
    await fallback.fallback(context, event, callback);
  }
};