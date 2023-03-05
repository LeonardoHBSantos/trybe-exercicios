let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addTurno (object, key, value) {
    return object[key] = value;
  };

  console.log(addTurno(lesson2, 'turno', 'noite'));

  function listKeys (object){
    return Object.keys(object);
  }

  console.log(listKeys(lesson1));

  function sizeObject (object) {
    return Object.keys(object).length;
  }

  console.log(sizeObject(lesson2));

  function listValues (object) {
    return Object.values(object);
  }

  console.log(listValues(lesson3));
 
  let allLessons = Object.assign({}, { 
    lesson1: lesson1, 
    lesson2: lesson2, 
    lesson3: lesson3, 
  });

  console.log(allLessons);

  function totalNumberEstudants (object) {
    return (object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes);
  }

  console.log(totalNumberEstudants(allLessons));

  function getValueByNumber(object, index) {
    switch (index) {
        case 0:
          return object.materia;
          break;
        case 1:
          return object.numeroEstudantes;
          break;
        case 2:
          return object.professor;
          break;
        case 3:
          return object.turno;
          break;
    }
  };

  console.log(getValueByNumber(lesson1, 0));

  function verifyPair (object, key, value) {
    if (object[key] === value) {
      return true;
    } else {
      return false;
    }
  }

  console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));