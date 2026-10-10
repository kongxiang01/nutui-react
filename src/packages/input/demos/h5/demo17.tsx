import React from 'react'
import { Divider, Input } from '@nutui/nutui-react'

const Demo17 = () => {
  return (
    <>
      <Input
        status="error"
        placeholder="请输入用户名"
        description="请输入用户名"
      />
      <Divider />
      <Input
        plain
        status="error"
        defaultValue="京东多快好省"
        description="错误提示信息"
      />
    </>
  )
}

export default Demo17
