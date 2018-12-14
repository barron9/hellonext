
 import React,{Component} from "react"

// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// import Button from 'antd/lib/button';
// //import stylesheet from 'antd/dist/antd.min.css'

// const Index = (props) => (
//   <div>
//   <Link href="/about">
//   <a>About Page</a>
//   </Link>
//         <Button type="primary">Button</Button>

//   <p>Hello Next.js</p>
// {JSON.stringify(props.shows)}
//  {false && props.shows.map(({show})=>

//  <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
// )}

//  </div>
//   )

// Index.getInitialProps = async function() {
//   const res = await fetch('http://169.63.69.227:5050/api/auth')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }
  
//   export default Index
  
import fetch from 'isomorphic-unfetch';
class Page extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stars: props.stars
        }
    }
    //CLIENT SIDE RENDERING
    handleRefresh = async(e) => {
       const res = await fetch('http://169.63.69.227:5050/api/auth')
        const json = await res.json()
        this.setState({ stars: JSON.stringify(json) });
    }
    render() {
        return (
            <div>
                Next stars: {this.state.stars}
                <button onClick={this.handleRefresh}>Refresh</button>
            </div>
        )
    }
}
//SERVER SIDE RENDERING
Page.getInitialProps = async ({ req }) => {
  const res = await fetch('http://169.63.69.227:5050/api/auth')
  const json = await res.json()
  return { stars: JSON.stringify(json) }
}
export default Page