import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Create an unmodified response first
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser()


  // Protect /admin routes (Handle both /admin and /:lang/admin)
  const isAdminRoute = 
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.match(/^\/[a-z]{2}\/admin/);

  if (isAdminRoute && !user) {
    const locale = request.nextUrl.pathname.match(/^\/([a-z]{2})\//)?.[1] || 'ko';
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url))
  }

  // Redirect authenticated users away from /login
  const isLoginRoute = 
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.match(/^\/[a-z]{2}\/login/);

  if (isLoginRoute && user) {
     const locale = request.nextUrl.pathname.match(/^\/([a-z]{2})\//)?.[1] || 'ko';
    return NextResponse.redirect(new URL(`/${locale}/admin`, request.url))
  }

  return response
}
