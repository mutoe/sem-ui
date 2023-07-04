import { faFolder, faTrash } from '@fortawesome/free-solid-svg-icons'

export const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum debitis eius et ex illo in maiores molestias mollitia non odit porro possimus provident ratione sed sunt veniam, vero voluptatem.'

export const fileOptions: Sem.Option[] = [
  { value: '', text: 'New' },
  { value: '', text: 'Open...', description: 'ctrl + o' },
  { value: '', text: 'Save as...', description: 'ctrl + s' },
  { value: '', text: 'Rename', description: 'ctrl + r' },
  { value: '', text: 'Make a copy' },
  { value: '', text: 'Move to folder', icon: faFolder },
  { value: '', text: 'Move to trash', icon: faTrash, divider: true },
  { value: '', text: 'Download As...' },
  { value: '', text: 'Publish to Web' },
  { value: '', text: 'Email collaborators' },
]

export const countryOptions: Sem.Option[] = [
  { value: 'America', text: 'America' },
  { value: 'China', text: 'China' },
  { value: 'Russia', text: 'Russia' },
  { value: 'Singapore', text: 'Singapore' },
]

export const menuList = [
  { title: 'Tab1', key: 'tab1' },
  { title: 'Tab2', key: 'tab2' },
]

export const tabList = [
  { title: 'Tab1', content: 'Tab1 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
  { title: 'Tab2 with a looooong name', content: 'Tab2 content: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta distinctio dolores ipsa ipsum iusto, maiores obcaecati odit saepe sapiente sed? Animi deleniti excepturi incidunt magnam similique temporibus unde vitae voluptate!' },
]
