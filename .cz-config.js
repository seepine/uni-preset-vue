module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: 'improvement', name: 'improvement: 功能优化' },
    { value: 'fix', name: 'fix:         修复 bug' },
    { value: 'feat', name: 'feat:        新增功能' },
    { value: 'style', name: 'style:       代码格式（不影响功能，例如空格、分号等格式修正）' },
    { value: 'docs', name: 'docs:        文档变更' },
    { value: 'refactor', name: 'refactor:    代码重构（不包括 bug 修复、功能新增）' },
    { value: 'perf', name: 'perf:        性能优化' },
    { value: 'test', name: 'test:        添加、修改测试用例' },
    {
      value: 'ci',
      name: 'ci:          修改 CI 配置、脚本（如打包部署脚本、dockerfile等）'
    },
    { value: 'revert', name: 'revert:      回滚 commit' },
    {
      value: 'build',
      name: 'build:       构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）'
    },
    {
      value: 'chore',
      name: 'chore:       版本发布或对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    }
    // { value: ':bug: fix', name: '🐛 fix:       修复 bug' },
    // { value: ':sparkles: feat', name: '✨  feat:      新增功能' },
    // {
    //   value: ':lipstick: style',
    //   name: '💄 style:     代码格式（不影响功能，例如空格、分号等格式修正）'
    // },
    // { value: ':memo: docs', name: '📝 docs:      文档变更' },
    // { value: ':recycle: refactor', name: '♻️ refactor:  代码重构（不包括 bug 修复、功能新增）' },
    // { value: ':zap: perf', name: '⚡️ perf:      性能优化' },
    // { value: ':white_check_mark: test', name: '✅  test:      添加、修改测试用例' },
    // {
    //   value: ':hammer: chore',
    //   name: '🔨 chore:     对构建过程或辅助工具和库的更改（不影响源文件、测试用例）'
    // },
    // { value: ':wrench: ci', name: '🔧 ci:        修改 CI 配置、脚本' },
    // { value: ':rocket: deps', name: '🚀 deps:      升级依赖' }
    // {
    //   value: ':bookmark: release',
    //   name: '🔖 release:   版本发布'
    // }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    ['custom', '自定义范围，例如sys/user'],
    ['utils', 'utils 相关'],
    ['router', 'router 相关']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`
    }
  }),
  // 是否允许自定义填写 scope，在 scope 选择的时候，会有 empty 和 custom 可以选择。
  // allowCustomScopes: true,
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 针对每一个 type 去定义对应的 scopes，例如 fix
  scopeOverrides: {
    chore: [
      { value: 'release', name: 'release      版本发布' },
      { value: 'custom', name: 'custom       自定义scope' }
    ],
    ci: [
      { value: 'deploy', name: 'deploy       部署脚本' },
      { value: 'docker', name: 'docker       docker相关' },
      { value: 'custom', name: 'custom       自定义scope' }
    ],
    build: [
      { value: 'deps', name: 'deps         依赖变更' },
      { value: 'custom', name: 'custom       自定义scope' }
    ]
  },
  // 交互提示信息
  messages: {
    type: '确保本次提交遵循 Angular 规范！\n选择你要提交的类型：',
    scope: '\n选择一个 scope（可选）：',
    customScope: '请输入自定义的 scope：',
    subject: '填写简短精炼的变更描述：\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行：\n',
    breaking: '列举非兼容性重大的变更（可选）：\n',
    footer: '列举出所有变更的 ISSUES CLOSED（可选）。 例如: #31, #34：\n',
    confirmCommit: '确认提交？'
  },

  // ['feat', 'fix']设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: [],
  // 跳过要询问的步骤
  skipQuestions: ['body'],

  // subject 限制长度
  subjectLimit: 100,
  breaklineChar: '|' // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
}
