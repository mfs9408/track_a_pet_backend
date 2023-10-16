import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('library')
@Controller('library')
export class LibraryController {
  constructor() {}

  @Get('/articles')
  getArticles() {
    return [
      {
        articleLink:
          'https://www.catanddogfirstaid.com/blog/10-red-flags-from-dogs-you-should-never-ignore/amp/',
        image: 'https://placekitten.com/g/200/300',
        header: 'Dog health',
        keyWord: 'dog',
        shortDescription: 'Health Facts that Could Save Your Cat’s Life',
      },
      {
        articleLink:
          'https://www.hillspet.com/cat-care/play-exercise/five-fun-things-to-do-with-your-cat?lightboxfired=true',
        image: 'https://placekitten.com/g/200/300',
        header: 'Cat health',
        keyWord: 'cat',
        shortDescription: '5 New Fun Things to Do With Your Cat',
      },
      {
        articleLink:
          'https://www.westfieldvetgroup.com/blog/2021/september/does-my-pet-need-vitamins-or-supplements-/',
        image: 'https://placekitten.com/g/200/300',
        header: 'Pet care',
        keyWord: 'all',
        shortDescription: 'Does my pet need vitamins or supplements?',
      },
    ];
  }
}
