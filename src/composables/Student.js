import { useDataStore } from "../stores/DataStore";

const studentData = useDataStore().students.data;

export const studentMap = {};

for (const student of studentData) {
    studentMap[student.Id] = student;
}

export function getStudentById(studentId) {
    return studentMap[studentId];
}

export function getStudentByPathName(path) {
    return studentData.find(s => s.PathName == path);
}

export function* studentsGenerator() {
    for (const id in studentMap) {
        yield studentMap[id];
    }
}