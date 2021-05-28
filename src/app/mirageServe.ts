import { Server } from 'miragejs';
import posts from './papel.json';



export default () => {

  return new Server({

    seeds(server) {
      server.db.loadData({
        posts
      });
    },
    routes(): void {

      this.namespace = 'api';
      this.get('/name-editor', schema => schema.db.posts);
      this.post('/name-editor', (schema, request) => {
        const r = JSON.parse(request.requestBody);
        let tt:any[] = [];
        console.log(schema);
        let aa = schema.db.posts.where({Papel : r.filtro});
        // schema.db.posts.forEach(element => {
        //   if (element.Papel.indexOf(r.filtro) >= 0) {
        //     tt.push(element);
        //   }
        // });
        return aa;
      });

    },

  });

}
