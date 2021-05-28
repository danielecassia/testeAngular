import { Server } from 'miragejs';


const posts = [
  {
    id: 1580385920514,
    title: 'Post 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti at voluptatum iure magnam laborum id, aut qui animi et quisquam expedita rem, sed, fuga quas? Officia corrupti consectetur blanditiis?',
    like: false
  },
  {
    id: 1580385928455,
    title: 'Post 2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
    like: true
  },
  {
    id: 1580385936498,
    title: 'Post 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
    like: true
  }
];




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

    },

  });

}
