# vue2-dnd
![img](http://img.shields.io/npm/v/vue2-dnd.svg)
![img](http://img.shields.io/badge/license-MIT-blue.svg)

> Drag n' Drop plugin for Vue.js

## Installation
```
npm install vue2-dnd --save
```

## Usage
```javascript
import Vue2Dnd from 'vue2-dnd'

Vue.use(Vue2Dnd)
```

### Draggable Directive
```
v-draggable.[groupname]="[draggable object]"
```

```
<template>
  <div v-draggable.groupname="item"></div>
</template>

<script>
  export default {
    data () {
      return {
        key: item.key,
        name: item.name
      }
    }
  }
</script>
```

### Droppable Directive
```
v-draggable.[groupname]="[droppable callback function]"
```

```
<template>
  <div v-droppable.groupname="callback"></div>
</template>

<script>
  export default {
    methods: {
      callback ($ev) {
        // $ev contains the draggable object
      }
    }
  }
</script>
```

## License
MIT