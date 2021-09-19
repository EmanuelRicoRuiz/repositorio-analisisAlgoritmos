CREATE TABLE public.ventas (
	numerofactura int4 NOT NULL,
	cliente varchar NOT NULL,
	valor int4 NOT NULL,
	fecha date NOT NULL,
	vendedor varchar NOT NULL,
	plazo varchar NOT NULL,
	CONSTRAINT ventas_pk PRIMARY KEY (numerofactura)
);
CREATE TABLE public.articulos (
	numerofactura int4 NOT NULL,
	codprod varchar NOT NULL,
	nombreprod varchar NOT NULL,
	precio int4 NOT NULL,
	CONSTRAINT articulos_pk PRIMARY KEY (numerofactura,codprod),
	CONSTRAINT articulos_fk FOREIGN KEY (numerofactura) REFERENCES public.ventas(numerofactura)
);