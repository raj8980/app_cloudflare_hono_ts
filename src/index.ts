import { Hono } from 'hono'

const app = new Hono()

async function authMiddleWare(c:any,next:any){
  if(c.req.header("Authorization")){
    await next();
  }else{
    return c.text("You don't have access");
  }
}

app.use(authMiddleWare)

app.get('/', authMiddleWare,async (c) => {
  // const body = await c.req.json();
  // console.log(body);
  // console.log(c.req.header("Authorization"));
  // console.log(c.req.query("param"));
  return c.json({
    message:"Hi There"
  })
});



export default app
