class EventManager {
  handlers = {}

  on = (eventName, handler) => {
    if(!this.handlers[eventName]) {
      this.handlers[eventName] = [];
    }

    this.handlers[eventName].push(handler)
  }

  off = (eventName, handler) => {
    if(!this.handlers[eventName]) return;

    const index = findIndex(this.handlers[eventName], handler);
    this.handlers[eventName] = this.handlers[eventName].splice(index, 1);
  }

  trigger = name => {
    if(!this.handlers[name]) return;

    this.handlers[name].forEach(handler => handler())
  }
}

const onClick1 = () => console.log('onClick1');

const onClick2 = () => console.log('onClick2');

const onClick3 = () => console.log('onClick3');
const onMousemove = () => console.log('onMousemove');

const findIndex = (value, handler) => value.findIndex(event => event.name === handler.name);

function onClickHandler1() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button').addEventListener('click', onClick1)
  });
}

function onClickHandler2() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button').addEventListener('click', onClick2)
  });
}

function onClickHandler3() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button').addEventListener('click', onClick3)
  });
}

function onMousemoveHandler() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button').addEventListener('mouseover', onMousemove)
  });
}

let event = new EventManager();
event.on('click', onClickHandler1)
event.on('click', onClickHandler3)
event.on('mouseover', onMousemoveHandler)

event.off('click', onClickHandler2)
event.off('click', onClickHandler1)

event.trigger('click')
event.trigger('mouseover')


