import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "../categoria/entities/categoria.entity";
import { CategoriaService } from "../categoria/services/categoria.service";
import { Produto } from "./entities/produto.entities";
import { ProdutoService } from "./services/produto.service";
import { ProdutoController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto, Categoria])],
    providers: [CategoriaService, ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
})
export class ProdutoModule { }