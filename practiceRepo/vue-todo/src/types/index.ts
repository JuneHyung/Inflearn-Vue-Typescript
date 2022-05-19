export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent{
    target: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent{
    target: T;
  }
}

// a.vue
// VueEvent.Input

// 타입의 위계
// Event -> target속성 이미 정의 되어있음. target 속성 타입과 호환되어야함
// UIEvent
// InputEvent