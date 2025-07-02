import * as DocumentPro from './types/DocumentPro'
import * as Document from './types/Document'
import * as Spreadsheet from './types/Spreadsheet'
import * as Presentation from './types/Presentation'
import * as Table from './types/Table'
import * as Form from './types/Form'
import * as Flowchart from './types/FlowChart'
import { EventMap as BaseEventMap, BaseEditor } from './types/BaseEditor'

export * from 'shimo-js-sdk-shared'

export * from './connect'

export * from './ShimoSDK'

export {
  BaseEditor,
  DocumentPro,
  Document,
  Spreadsheet,
  Presentation,
  Table,
  Form,
  Flowchart,
  BaseEventMap
}

export const START_PARAMS_FIELD = 'smParams'
