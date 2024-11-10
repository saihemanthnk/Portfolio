import {NextResponse} from 'next/server'
import Resend from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(){
     
    try{

        const { data, error } = await resend.emails.send({
            from: 'Hemanth <saihemanthnk07@gmail.com>',
            to: [''],
            subject: 'Hello world',
            react: <>
            <p>Email Body</p>
            </>
          });
      
          if (error) {
            return NextResponse.json({ error }, { status: 500 });
          }
      
          return NextResponse.json(data);

    }
    catch(err){
        NextResponse.json({err},{status:500})
    }
}
