// function deepClone<T>(ori: T): T {
//   if (ori instanceof Array) {
//     return copyArray(ori)
//   }
//   return ori
// }

// function copyArray<T>(ori: Array<T>): T {
//   let copy: T[] = []
//   let index: string, value
//   for ([index, value] of Object.entries(ori)) {
//     copy[index] = deepClone(value)
//   }
//   return copy
// }

// // switch (type) {
// //   case 'array':
// //     return copyArray(ori, copy)
// //   // case 'object':
// //   //   return copyObject(ori, copy)
// //   // case 'function':
// //   //   return copyFunction(ori)
// //   // case 'map':
// //   //   return copyMap(ori)
// //   // case 'set':
// //   //   return copySet(ori)
// //   default:
// //     return ori
// // }

// // function copyObject<T extends Record<string, any>>(ori: T, copy: T) {
// //   for (const [key, value] of Object.entries(ori)) {
// //     copy[key] = deepClone(value)
// //   }
// //   return copy
// // }

// // function copyMap<T = Map<any, any>>(ori: T, copy: T = new Map()) {
// //   for (const [key, value] of ori) {
// //     copy.set(key, deepClone(value))
// //   }
// //   return copy
// // }

// // function copySet<T = Set<any>>(ori: T, copy: T = new Set()) {
// //   for (const [key, value] of ori.entries()) {
// //     copy.add(deepClone(value))
// //   }
// //   return copy
// // }

// // function copyFunction<T>(ori: T): T {
// //   const fun = eval(<function>ori.toString())
// //   fun.prototype = ori.prototype
// //   return fun
// // }
