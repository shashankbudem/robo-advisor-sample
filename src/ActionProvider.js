// import { createChatBotMessage } from "react-chatbot-kit";

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
    
    todosHandler=() =>{
        const message=this.createChatbotMessage("here are todos",{widget:"todos",});
        this.setChatBotMessage(message)
    };
    incomeHandler=()=>{
        const message= this.createChatbotMessage("Great! what is your approx Annual income?",{widget:"incomeearn",});
        this.setChatBotMessage(message)
    }
    askEmail=()=>{
        const message=this.createChatbotMessage("Please enter your email id to proceed!");
        this.setChatBotMessage(message)
    }
    financialGoals=()=> {
        const message=this.createChatbotMessage("What are your primary goals for investing?",{widget:"fingoals",});
        this.setChatBotMessage(message)
    }
    approachInvesting=()=>{
        const message=this.createChatbotMessage("Rate your risk tolerance between 1-10 !",{widget:"typoinvest",});
        this.setChatBotMessage(message)
    }
    typeofGender=()=>{
        const message=this.createChatbotMessage("Please select your gender!",{widget:"typgender",});
        this.setChatBotMessage(message)
    }
    askAge=()=>{
        const message=this.createChatbotMessage("What is your age?",{widget:"agerng",});
        this.setChatBotMessage(message)
    }
    replytoQstn=()=>{
        const message=this.createChatbotMessage("The data is being analysed give me a moment",{widget:"portfolio",});
        this.setChatBotMessage(message)
    }
    investingTime=()=>{
        const message=this.createChatbotMessage("Amazing! So How long before you need to cash-in some or all your investments?",{widget:"investtime",});
        this.setChatBotMessage(message)
    }
    setChatBotMessage=(message) => {
        this.setState(state => ({ ...state, messages: [...state.messages, message]}))
    }
    addMessageToState=(message)=>{
        this.setState(prevState => ({
           ...prevState,
           messages: [...prevState.messages,message],  
        }))
    }
  }
  
export default ActionProvider;
  