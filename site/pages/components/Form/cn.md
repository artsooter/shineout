# Form *表单*

Form 是一个比较复杂的组件，由下列组件组成

- **Form：** 表单
- **Form.Field：** 用于处理自定义组件，实现rules校验，存储数据功能。
- **Form.Item：** 表单项，用来布局，显示标签，提示文案信息等。
- **Form.Block：** 表单块，用来存取多级嵌套的数据。
- **Form.Loop：** 用于遍历 array 类型的值，生成子组件。

- **Form.Submit：** submit 按钮的快捷方式。使用 Submit 时，enter 键会触发表单提交。
- **Form.Reset：** reset 按钮的快捷方式。
- **Form.Button：** 同 submit 按钮。使用 Button 时，enter 键不会触发表单提交。

<example />

## API

### Form
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | | 扩展className |
| datum | object \| Datum.Form | | formdata 辅助类，不设置Form内部会自动创建，通常情况下不需要设置。 |
| disabled | bool | false | 是否禁用，为 true 时，表单内所有元素 disabled 都为 true |
| inline | bool | false | 是否水平布局 |
| labelAlign | string | | 可选值为 \['top', 'right']，默认为左边对齐。 |
| labelWidth | string \| number | 140px | 标签宽度，labelAlign 为 'top' 时无效。 |
| onChange | function(data) | | 表单内组件值变化函数 |
| onSubmit | function(data) | | 表单提交函数。表单内部校验失败时不会触发。 |
| rules | object | | 校验规则，详见 Rules |
| style | object | | 扩展样式 |

### Rules
校验规则，格式为 { name: \[ rule ] }

- name 对应表单内组件的 name 属性
- 每一个 rule 只处理一个属性，例如同时设置了 required, regExp 和 min，只会处理 required。多个判断需要设置多个 rule。

rule 共有 5 种规则，按优先级分别为：

- 函数：完全由调用者控制，理论上可以做所有校验。
- 必填：根据 required 属性是否为 true 判断，非必填时不需填 false。
- 长度：根据 min 或者 max 属性判断。
- 正则表达式：根据 regExp 来判断，可以是 RegExp 对象或 字符串。
- 类型：就是内置的几种常用 正则判断，不满足需求时，可以自定义正则表达式或使用 函数校验。

#### function(value, formdata, callback) : undefined

- value: 当前组件值
- formdata: 表单内所有组件值
- callback(true|Error): 校验结果，通过为 true，失败为 Error 对象

#### object

| 属性 | 类型 | 说明 |
| --- | --- | --- | --- |
| required | bool | 是否必填 |
| min | number | 最小值，type 为 'number' 时，判断数值大小，其他类型判断 length |
| max | number | 最大值，type 为 'number' 时，判断数值大小，其他类型判断 length |
| regExp | string \| RegExp | 正则表达式 |
| type | string | 类型校验，可选值为 \[ 'email', 'json', 'url', 'hex', 'number' ]，不支持的可以自定义 regExp 校验 |
| message | string | 错误消息。可以使用 '{key}' 符号进行格式化。key 为当前rule的属性。如 {min: 20, message: '最小值为 {min}'}，会格式化为 '最小值为 20'。 |

### Form.Item
表单项，主要用来布局，显示标签，提示文案信息等

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string \| ReactElement | undefined | 未定义时，标签不会render，也不会占位。如果无内容需要占位，使用空字符串 ''。 |
| required | boolean | false | 必填标记，纯展示用，不会触发校验 |
| tip | string | | 提示文案 |

### Form.Field
用于处理自定义表单组件，使自定义表单组件实现通过rules校验，存储数据功能

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | function(object) | 必填 | object 参数为<br />value: 根据 name 从上级 Form 或 Form.Block 获取的值<br />error：数据校验错误信息，类型为 Error<br />onChange: 值改变回调函数 |
| defaultValue | string \| number | | 默认值 |
| name | string | 无 | Form 存取数据的名称 |
| value | string \| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |

### Form.Block

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| onChange | function(value) | 必填 | 值改变回调函数 | 
| value | any | 必填 | 值 |

### Form.Loop

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | function(options) :ReactElement | 必填 | options 属性为<br />value：根据name获取的值的单条数据<br />onChange：子组件数据改变回调<br />onRemove：子组件删除回调<br />index：当前项索引 |
| name | string | 必填 | 从上层表单中获取值的key，获取的数据必须为 array 类型 |

### Submit, Reset, Button
同 [Button](#/components/Button)