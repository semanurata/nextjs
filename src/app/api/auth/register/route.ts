import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${process.env.API_URL}/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.message || "Kayıt işlemi başarısız oldu";

      return Response.json(
        {
          success: false,
          message: errorMessage,
          error: data.error?.details || errorMessage,
        },
        { status: response.status }
      );
    }

    return Response.json({
      success: true,
      message: "Kayıt işlemi başarılı",
      data: data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST = Oluşturma işlemleri yapar
// GET = Okuma işlemleri yapar, veri çekmeye yarar
// DELETE = Silme işlemleri yapar
// PUT = Güncelleme işlemleri yapar
