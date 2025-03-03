import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    // 1. 强制使用HTTPS (生产环境)
    if (url.protocol === 'http:' && process.env.NODE_ENV === 'production') {
        url.protocol = 'https:';
        return NextResponse.redirect(url);
    }

    // 2. 规范化URL - 去除尾部斜杠
    if (url.pathname.endsWith('/') && url.pathname.length > 1) {
        url.pathname = url.pathname.slice(0, -1);
        return NextResponse.redirect(url);
    }

    // 3. www 到非www的重定向（可选）
    if (url.hostname.startsWith('www.')) {
        url.hostname = url.hostname.replace('www.', '');
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// 匹配需要应用该中间件的路径
export const config = {
    matcher: [
        /*
         * 匹配所有请求路径，除了:
         * - API路由
         * - _next文件夹下的内容(静态文件)
         * - favicon.ico、公开的图片文件等
         */
        '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$|.*\\.jpg$).*)',
    ],
};
