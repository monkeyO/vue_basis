<template>
  <div class="hello" v-title="msg">
    <Tree :data="treeData"></Tree>
    <Button type="parmariy" @click="handleSearch">search</Button>
  </div>
</template>

<script>
import { Tree } from 'iview';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      treeData: [
        {
        	title: 'dddd',
	        expand: true,
	        render: (h, { root, node, data }) => {
		        return h('span', {
			        style: {
				        display: 'inline-block',
				        width: '100%'
			        }
		        }, [
			        h('span', [
                (
                	data.title === 'cccc' ? (
		                h('img', {
			                attrs: {
			                	src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
                      }
		                })
                  ) : (
		                h('Icon', {
			                props: {
				                type: 'ios-folder-outline'
			                },
			                style: {
				                marginRight: '8px'
			                }
		                })
                  )
                ),
				        h('span', data.title)
			        ]), [
				        h('Checkbox', {
					        on: {
						        'on-change': () => { console.log(data) }
					        }
				        })
			        ]
		        ]);
	        },
          children: [
            {
	            title: 'cccc',
	            expand: true,
	            render: (h, { root, node, data }) => {
		            return h('span', {
			            style: {
				            display: 'inline-block',
				            width: '100%'
			            }
		            }, [
			            h('span', [
				            (
					            data.title === 'cccc' ? (
						            h('img', {
							            attrs: {
								            src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
							            }
						            })
					            ) : (
						            h('Icon', {
							            props: {
								            type: 'ios-folder-outline'
							            },
							            style: {
								            marginRight: '8px'
							            }
						            })
					            )
				            ),
				            h('span', data.title)
			            ])
		            ]);
	            },
	            children: []
            }, {
		          title: 'xxx',
		          expand: true,
		          render: (h, { root, node, data }) => {
			          return h('span', {
				          style: {
					          display: 'inline-block',
					          width: '100%'
				          }
			          }, [
				          h('span', [
					          (
						          data.title === 'cccc' ? (
							          h('img', {
								          attrs: {
									          src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
								          }
							          })
						          ) : (
							          h('Icon', {
								          props: {
									          type: 'ios-folder-outline'
								          },
								          style: {
									          marginRight: '8px'
								          }
							          })
						          )
					          ),
					          h('span', data.title)
				          ])
			          ]);
		          },
		          children: [
			          {
				          title: '222',
				          expand: true,
				          render: (h, { root, node, data }) => {
					          return h('span', {
						          style: {
							          display: 'inline-block',
							          width: '100%'
						          }
					          }, [
						          h('span', [
							          (
								          data.title === '222' ? (
									          h('img', {
										          attrs: {
											          src: 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2'
										          }
									          })
								          ) : (
									          h('Icon', {
										          props: {
											          type: 'ios-folder-outline'
										          },
										          style: {
											          marginRight: '8px'
										          }
									          })
								          )
							          ),
							          h('span', data.title)
						          ]), [
							          h('Checkbox', {
								          on: {
									          'on-change': () => { console.log(data) }
								          }
							          })
						          ]
					          ]);
				          },
				          children: []
			          }
              ]
	          }
          ]
        }
      ]
    }
  },
  methods: {
	  handleSearch() {},
  },
  mounted() {
    this.$store.state.abb = '12';
  },
  components: {
	  Tree
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
