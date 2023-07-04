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
