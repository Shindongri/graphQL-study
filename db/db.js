export const people = [
    {
        id: 0,
        name: "shindongri",
        age: 30,
        gender: "male"
    },
    {
        id: 1,
        name: "JD",
        age: 24,
        gender: "female"
    },
    {
        id: 2,
        name: "Opppp",
        age: 30,
        gender: "male"
    },
    {
        id: 3,
        name: "LCD",
        age: 28,
        gender: "male"
    },
    {
        id: 4,
        name: "KCODS",
        age: 29,
        gender: "female"
    },
    {
        id: 5,
        name: "OOOO",
        age: 32,
        gender: "male"
    },
    {
        id: 6,
        name: "shindongri",
        age: 33,
        gender: "male"
    }
];

export const getById = id => {
  const filteredPeople = people.filter( person => person.id === id );
  return filteredPeople[0];
};

export const deleteMovies = id = {
    const cleanPeople = people.filter( person => person.id !== id );
    return filteredPeople[0]l
}
