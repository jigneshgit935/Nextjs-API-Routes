import { NextResponse } from 'next/server';

export function GET(request) {
  return NextResponse.json(
    { name: 'Jignesh', age: 22, city: 'Udaipur' },
    { status: 200 }
  );
}
