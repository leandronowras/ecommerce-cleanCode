
import Broker from './infra/broker/Broker'
import OrderDaoDatabase from './infra/dao/OrderDAODatabase'
import PgPromiseConnectionAdapter from './infra/database/PgPromiseConnectionAdapter'
import DatabaseRepositoryFactory from './infra/factory/DatabaseRepositoryFactory'
import ExpressAdapter from './infra/http/ExpressAdapter'
import RouteConfig from './infra/http/RouteConfig'


const repositoryFactory = new DatabaseRepositoryFactory()
const connection = PgPromiseConnectionAdapter.getInstance()
const orderDAO = new OrderDaoDatabase(connection)
const expressAdapter = new ExpressAdapter()
const broker = new Broker()

new RouteConfig(expressAdapter, repositoryFactory, orderDAO, broker)

expressAdapter.listen(3000)