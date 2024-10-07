// javascript object

{
  //    let NewObject1 = new Object();
  //     let NewObject2 = {};
  //     console.log(NewObject1);
  //     console.log(NewObject2);
  //     console.log(NewObject1 == NewObject2);
}

{
  //   let NewObject1 = { obj1: "value1", obj2: "value2", obj3: "value3" };
  //   console.log(NewObject1);
  //   console.log(NewObject1.obj1);
  //   console.log(NewObject1["obj2"]);
  //   console.log(NewObject1["obj3"]);
}

//   Object.assign()

// Object.assign(target)
// Object.assign(target, source1)
// Object.assign(target, source1, source2)
// Object.assign(target, source1, source2, /* …, */ sourceN)

{
  // let NewObject1 = { obj1: "value1", obj2: "value2", obj3: "value3" };
  // let NewObject2 = { obj4: "value4", obj5: "value5", obj6: "value6" };
  // let NewObject3 = { obj7: "value7", obj8: "value8", obj9: "value9" };
  // let NewObject4 = Object.assign(NewObject2, NewObject1, NewObject3);
  // console.log(NewObject4);
  // console.log(NewObject3);
  // console.log(NewObject2);
  // console.log(NewObject1);
}

//   Object.create()

// Object.create(proto)
// Object.create(proto, propertiesObject)

{
  // const profile = {
  //     name: "John",
  //     age: function () {
  //       console.log(`I am ${this.ages} years old and name is ${this.name}`);
  //     },
  //   };
  // const profile2 = Object.create(profile);
  // profile2.ages = 22;
  // console.log(profile2);
  // console.log(profile2.age())
}

// Object.defineProperties()

// Object.defineProperties(obj, props)
{
  const object = {};

  Object.defineProperties(object, {
    property1: {
      value: 42,
      writable: true,
    },
    property2: {
      value: 50,
      writable: true,
    },
  });

  console.log(object.property2);
}

// Object.defineProperty()

// Object.defineProperty(obj, prop, descriptor)

{
  const object1 = {};

  Object.defineProperty(object1, "property1", {
    value: 60,
    writable: false,
  }),
    console.log(object1.property1);
}

// Object.entries()

// Object.entries(obj)

{
  let object1 = {
    name: "HelloWorld",
    age: 20,
    city: "Surat",
  };

  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key} : ${value}`);
  }
}

// Object.freeze()

// Object.freeze(obj)

{
  let object1 = {
    name: "HelloWorld",
    age: 20,
    city: "Surat",
  };

  let freeze = Object.freeze(object1);

  console.log(freeze);

  delete object1.name;

  object1.subject = "maths";

  console.log(object1);
}

// Object.keys()

// Object.keys(obj)

{
  const object1 = {
    a: "somestring",
    b: 42,
    c: false,
  };

  console.log(Object.keys(object1));
}

// Object.values()
// Object.values(obj)

{
  const object1 = {
    a: "somestring",
    b: 42,
    c: false,
  };

  console.log(Object.values(object1));
}

// Object.is()
// Object.is(value1, value2)

{
  console.log(Object.is("1", 1));

  console.log(Object.is(NaN, NaN));
}

// Object.seal()

// Object.seal(obj)

{
    const object1 = {
        property1: 42,
    };

    Object.seal(object1);
    object1.property1 = 33;
    console.log(object1.property1);

    // Cannot delete when sealed
    delete object1.property1; 
   console.log(object1.property1)
}

// Object.isSealed()
// Object.isSealed(obj)

{
    const object1 = {
        property1: 42,
    };
    
    Object.seal(object1);

    console.log(Object.isSealed(object1));
}