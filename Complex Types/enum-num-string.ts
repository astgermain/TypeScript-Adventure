// This is a numeric enum type
enum ClassGrade {
  Freshman = 9,
  Sophomore,
  Junior,
  Senior
};
 
// This is a string enum type
enum ClassName {
  Freshman = 'FRESHMAN',
  Sophomore = 'SOPHOMORE',
  Junior = 'JUNIOR',
  Senior = 'SENIOR'
}
 
const studentClass: ClassName = ClassName.Junior;
const studentGrade: ClassGrade = ClassGrade.Junior;
 
console.log(`I am a ${studentClass} in ${studentGrade}th grade.`);
// Prints "I am a JUNIOR in 11th grade."