<script>
    export default {
        name: "item",
        functional: true,
        props: {
            icon: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            }
        },
        render(h, context) {
            const { icon, title } = context.props
            const vnodes = []
            if (icon) {
                vnodes.push(<v-svg-icon icon-class={icon} className="side-icon"/>)
            }
            if (title) {
                vnodes.push(<span slot="title">{title}</span>)
            }
            return vnodes
        }
    }
</script>

<style lang="less" scoped>
    .side-icon {
        margin-right: 10px;
    }
</style>
