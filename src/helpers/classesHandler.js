/**
 * classesHandler
 * combine static and dynamic classes to avoid millions of ternary operators
 * params: ('static-class-1 static-class-2', {'dynamic-class-1': isEnabled})
 * output: [isEnabled TRUE] 'static-class-1 static-class-2 dynamic-class-1'
 *
 * thanks to felixanDEEEEEER. GLHF. Coded in 'classic-felix-format'
 * Thu, 18.6.20
 */
export default (classes, optionalClasses) =>
  [
    classes,
    ...Object.keys(optionalClasses).filter(
      optionalClass => optionalClasses[optionalClass]
    ),
  ].join(" ")
