<p align="center">
  <a href="https://www.albathanext.com/" target="blank"><img src="https://static.wixstatic.com/media/43d7b1_dae03c43e8644ebdb3bbecffa55370c8~mv2.png/v1/fill/w_107,h_119,al_c,usm_0.66_1.00_0.01,enc_auto/A-Next.png" width="320" alt="Nest Logo" /></a>
</p>

## Tech Strategy:

For the simplicity of task deliverables, I've used a simple yet clear design. I divided the react app into two pages "Home" and "Movie".

Home page contains a slider that gets the featured movies. When scrolling you'll be able to search and see a default list of 10 movies.

Movie page contains a movie hero, preview section, trailer section and reviews section.

All of the components of the tow pages are abstracted, reusable components.

Also to keep it simple the redux folder structure is not complicated and I kept it at minimum. In a larger project I would divide it into actions, reducers and main folders.

I kept the environment variables file ".env" for the purpose of easing the process of running the application only.

As for the backend there's no much to say except that I tired following the best practices for Nestjs although, I'm quite new to the framework.

Below you'll find simple instructions to run the application

## Installation && Running the app

```bash
$ npm install
$ cd client && npm install
$ cd ..
$ npm run app
```

## How It Looks

![Home](https://drive.google.com/file/d/1TD6kPirwn9PBO05CUeJR-W4jKQMfgdK1/view?usp=sharing)

![Home](https://drive.google.com/file/d/1tfJUIXzW0hwh2UKtG8O9FABRURheZ5fe/view?usp=sharing)

![Movie](https://drive.google.com/file/d/1E-Y9xxqQ5h7Z3gSMA0ydG1PKSd4pckoD/view?usp=sharing)

![Movie](https://drive.google.com/file/d/1lKXd4od7zk1PW0-nLpp0cLTGTi5kYLRK/view?usp=sharing)

![Movie](https://drive.google.com/file/d/1UlL8eC7iPbV2nrRST9fNVZdOz4Ww-_N5/view?usp=sharing)

## License

Nest is [MIT licensed](LICENSE).
