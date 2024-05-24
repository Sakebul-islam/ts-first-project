import { StudentServices } from './student.service';
import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentInDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is create Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrieved Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
