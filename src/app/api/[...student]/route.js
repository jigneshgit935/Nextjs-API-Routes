import { NextResponse } from 'next/server';

export async function GET(request, content) {
  let studentDetails = content.params.student;
  console.log(studentDetails);
  return NextResponse.json({ result: studentDetails }, { status: 200 });
}
