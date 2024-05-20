import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const superTokenSecretKey = process.env.JWT_SECRET_KEY;

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(superTokenSecretKey));
    return payload;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth")?.value;

  // Allow access to the home page ("/"), login page ("/login"), API login endpoint ("/api/auth/login"), and static files
  if (
    pathname === '/' ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/auth/register') ||
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next();
  }

  // If no token is found, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const payload = await verifyToken(token);

  // If token verification fails, redirect to login
  if (!payload) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Handle redirections based on user type
  if (pathname.startsWith('/dashboard')) {
    if (payload.tipoUsuario === 'Cliente') {
      return NextResponse.redirect(new URL('/cliente', request.url));
    }
    if (payload.tipoUsuario === 'Asesor') {
      return NextResponse.redirect(new URL('/advisor', request.url));
    }
  }

  if (pathname.startsWith('/cliente')) {
    if (payload.tipoUsuario !== 'Cliente') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  if (pathname.startsWith('/advisor')) {
    if (payload.tipoUsuario !== 'Asesor') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}