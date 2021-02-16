<template>
  <div class="demo">
    <h1 style="text-align: center;">DEMO</h1>
    <editor ref="editor" :config="config" :initialized="onInitialized"/>
  </div>
</template>

<script>
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code'
import Paragraph from '@editorjs/paragraph'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Checklist from '@editorjs/checklist'
import Marker from '@editorjs/marker'
import Warning from '@editorjs/warning'
import RawTool from '@editorjs/raw'
import Quote from '@editorjs/quote'
import InlineCode from '@editorjs/inline-code'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from '@editorjs/simple-image'

export default {
  data() {
    return {
      config: {
        tools:{
          header: {
            class: Header,
            config: {
              placeholder: 'Введите заголовок',
              levels: [2, 3, 4],
              defaultLevel: 3,
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool
          },
          paragraph: {
            class: Paragraph,
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true,
                imgur: true
              }
            }
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
          checklist: {
            class: Checklist,
          },
          Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M',
          },
          warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
              titlePlaceholder: 'Заголовок',
              messagePlaceholder: 'Сообщение',
            },
          },
          raw: RawTool,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Введите цитату',
              captionPlaceholder: 'Цитата автора',
            },
          },
          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+M',
          },
          delimiter: Delimiter,
          image: SimpleImage,
        },
        onReady: () => {
          console.log('on ready')
        },
        onChange: (args) => {
          console.log('Теперь я знаю, что содержание редактора изменилось!')
        },
        data: {
            "time": 1591362820044,
            "blocks": [
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Editor.js",
                        "level" : 2
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Привет. Встречайте новый редактор. На этой странице вы можете увидеть его в действии - попробуйте отредактировать этот текст."
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Ключевая особенность",
                        "level" : 3
                    }
                },
                {
                    "type" : "list",
                    "data" : {
                        "style" : "unordered",
                        "items" : [
                            "Это редактор в блочном стиле.",
                            "Возвращает чистый вывод данных в JSON",
                            "Разработан с возможностью расширения и подключения с помощью простого API"
                        ]
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Что значит «блочный редактор»",
                        "level" : 3
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Рабочее пространство в классических редакторах состоит из одного контентного элемента, используемого для создания различных HTML-разметок. Editor.js <mark class=\"cdx-marker\">рабочая область состоит из отдельных блоков: paragraphs, headings, images, lists, quotes, etc</mark>. Каждый из них представляет собой независимый контентный элемент (или более сложную структуру), предоставляемый Плагином и объединенный Ядром редактора."
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "There are dozens of <a href=\"https://github.com/editor-js\">ready-to-use Blocks</a> and the <a href=\"https://editorjs.io/creating-a-block-tool\">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games."
                    }
                },
                {
                    "type" : "header",
                    "data" : {
                        "text" : "Что значит чистый вывод данных",
                        "level" : 3
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Классические WYSIWYG-редакторы создают необработанную HTML-разметку как с данными контента, так и с внешним видом контента. Напротив, Editor.js выводит объект JSON с данными каждого блока. Вы можете увидеть пример ниже"
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Эти данные можно использовать как угодно: render with HTML for <code class=\"inline-code\">Web clients</code>, render natively for <code class=\"inline-code\">mobile apps</code>, create markup for <code class=\"inline-code\">Facebook Instant Articles</code> or <code class=\"inline-code\">Google AMP</code>, generate an <code class=\"inline-code\">audio version</code> and so on."
                    }
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Чистые данные полезны для дезинфекции, проверки и обработки на сервере."
                    }
                },
                {
                    "type" : "delimiter",
                    "data" : {}
                },
                {
                    "type" : "paragraph",
                    "data" : {
                        "text" : "Мы работаем над этим проектом более трех лет. Несколько крупных медиа-проектов помогают нам тестировать и отлаживать редактор, чтобы сделать его ядро ​​более стабильным. В то же время мы значительно улучшили API. Теперь с его помощью можно создать любой плагин для любой задачи. Надеемся, вам понравится. 😏"
                    }
                },
                {
                    "type" : "image",
                    "data" : {
                        "file" : {
                            "url" : "https://codex.so/public/app/img/external/codex2x.png"
                        },
                        "caption" : "",
                        "withBorder" : false,
                        "stretched" : false,
                        "withBackground" : false
                    }
                },

            ],
            "version" : "2.18.0"
        }
      },
    };
  },
  methods: {
    onInitialized (editor) {
      console.log(editor)
    }
  }
};
</script>

<style>
</style>
