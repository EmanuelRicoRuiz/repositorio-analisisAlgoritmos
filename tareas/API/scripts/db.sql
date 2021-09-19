CREATE TABLE public.ventas (
	numerofactura int4 NOT NULL,
	cliente varchar NOT NULL,
	valor int4 NOT NULL,
	fecha date NOT NULL,
	vendedor varchar NOT NULL,
	plazo varchar NOT NULL,
);
CREATE TABLE public.articulos (
	numerofactura int4 NOT NULL,
	codprod varchar NOT NULL,
	nombreprod varchar NOT NULL,
	precio int4 NOT NULL,
);