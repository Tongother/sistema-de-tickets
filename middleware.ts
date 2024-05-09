import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
const superTokenSecretKey = process.env.JWT_SECRET_KEY;

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("auth") as any;
  if(request.nextUrl.pathname.includes('/dashboard')){
    if (token !== undefined) {
      const joseToken = token.value as string;
      if (joseToken === undefined) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      else {
        try {
          const { payload } = await jwtVerify(joseToken, new TextEncoder().encode(superTokenSecretKey));
          console.log(payload);
          if(payload.tipoUsuario === 'Cliente' ){
              return NextResponse.redirect(new URL('/cliente', request.url));
          }
          
          if(payload.tipoUsuario === 'Asesor'){
            return NextResponse.redirect(new URL('/advisor', request.url));
          }
          else{
            return NextResponse.next();
          }
        }
        catch (error) {
          console.error(error);
          return NextResponse.redirect(new URL('/login', request.url));
        }
      }
    }
  }

  if(request.nextUrl.pathname.includes('/cliente')){
    if (token !== undefined) {
      const joseToken = token.value as string;
      if (joseToken === undefined) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      else {
        try {
          const { payload } = await jwtVerify(joseToken, new TextEncoder().encode(superTokenSecretKey));
          console.log(payload);
          if(payload.tipoUsuario === 'Cliente'){
            return NextResponse.next();
          }
          if(payload.tipoUsuario === 'Asesor'){
            return NextResponse.redirect(new URL('/advisor', request.url));
          }
          else{
            return NextResponse.next();
          }
        }
        catch (error) {
          console.error(error);
          return NextResponse.redirect(new URL('/login', request.url));
        }
      }
    }
  }

  if(request.nextUrl.pathname.includes('/advisor')){
    if (token !== undefined) {
      const joseToken = token.value as string;
      if (joseToken === undefined) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      else {
        try {
          const { payload } = await jwtVerify(joseToken, new TextEncoder().encode(superTokenSecretKey));
          console.log(payload);
          if(payload.tipoUsuario === 'Cliente'){
            return NextResponse.redirect(new URL('/cliente', request.url));
          }
          if(payload.tipoUsuario === 'Asesor'){
            return NextResponse.next();
          }
          else{
            return NextResponse.next();
          }
        }
        catch (error) {
          console.error(error);
          return NextResponse.redirect(new URL('/login', request.url));
        }
      }
    }
  }
  
}
