import {NextResponse} from 'next/server';

export async function GET(request) {
    try {
        const response = await fetch('https://www.example.com', {cache: 'no-store'});
        const html = await response.text();
        console.log(html);

        const url = new URL(request.url);
        const {searchParams} = url;
        const q = searchParams.get('q') || 'foobar';
        console.log(q);

        return NextResponse.json({q});
    } catch (e) {
        console.log(e);
        return NextResponse.json({e});
    }
}
