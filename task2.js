class EventManager {
  constructor(click, hover, mouseover) {
    this.click = click;
    this.hover = hover;
    this.mouseover = mouseover;
  }
  on = eventName => {
    if (this[eventName]) {
      console.log(this[eventName])
    }
  }

  off = () => console.log('all events are disabled')
  trigger = name => {
    this.on(name)
  }
}

let event1 = new EventManager('CLICK', 'HOVER', 'MOUSEOVER');
let event2 = new EventManager('aaa', 'bbb', 'ccc');

event2.trigger('mouseover')
