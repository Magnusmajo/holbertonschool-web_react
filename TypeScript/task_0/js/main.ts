interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Joge',
    lastName: 'Beritan',
    age: 18,
    location: 'USA'
};
const student2: Student = {
    firstName: 'John',
    lastName: 'Wick',
    age: 19,
    location: 'UK'
};
const studentsList: Array<Student> = [student1, student2];
