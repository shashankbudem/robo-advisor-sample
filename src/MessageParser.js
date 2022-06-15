// import ActionProvider from "./ActionProvider";

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase()
   
      if(/^([a-zA-Z]+)$/.test(lowercase)){
        this.actionProvider.askEmail();
      }
      if(lowercase.includes("@gmail.com")){
        this.actionProvider.askAge();
      }
      if(lowercase.includes("todos")){
          this.actionProvider.todosHandler();
      }
      if(lowercase.includes("100000")){
          this.actionProvider.financialGoals();
      }
      if(lowercase.includes("22")){
        this.actionProvider.typeofGender();
      }
    }
  }

export default MessageParser