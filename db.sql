--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.7 (Ubuntu 14.7-0ubuntu0.22.04.1)

-- Started on 2023-05-13 09:39:11 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16423)
-- Name: adonis_schema; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adonis_schema (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    batch integer NOT NULL,
    migration_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.adonis_schema OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16422)
-- Name: adonis_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.adonis_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adonis_schema_id_seq OWNER TO postgres;

--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 209
-- Name: adonis_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.adonis_schema_id_seq OWNED BY public.adonis_schema.id;


--
-- TOC entry 211 (class 1259 OID 16430)
-- Name: adonis_schema_versions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.adonis_schema_versions (
    version integer NOT NULL
);


ALTER TABLE public.adonis_schema_versions OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16443)
-- Name: stuff; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stuff (
    id integer NOT NULL,
    name text,
    state text,
    quantity integer
);


ALTER TABLE public.stuff OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16442)
-- Name: stuff_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stuff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stuff_id_seq OWNER TO postgres;

--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 212
-- Name: stuff_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stuff_id_seq OWNED BY public.stuff.id;


--
-- TOC entry 3216 (class 2604 OID 16426)
-- Name: adonis_schema id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adonis_schema ALTER COLUMN id SET DEFAULT nextval('public.adonis_schema_id_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 16446)
-- Name: stuff id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stuff ALTER COLUMN id SET DEFAULT nextval('public.stuff_id_seq'::regclass);


--
-- TOC entry 3363 (class 0 OID 16423)
-- Dependencies: 210
-- Data for Name: adonis_schema; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adonis_schema (id, name, batch, migration_time) FROM stdin;
1	database/migrations/1683475462867_stuffs	1	2023-05-07 11:29:06.047696-05
\.


--
-- TOC entry 3364 (class 0 OID 16430)
-- Dependencies: 211
-- Data for Name: adonis_schema_versions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.adonis_schema_versions (version) FROM stdin;
2
\.


--
-- TOC entry 3366 (class 0 OID 16443)
-- Dependencies: 213
-- Data for Name: stuff; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stuff (id, name, state, quantity) FROM stdin;
4	escalera	Broken	0
1	taladro	used	50
2	martillo	New	12
3	puntillas	Used	200
\.


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 209
-- Name: adonis_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.adonis_schema_id_seq', 1, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 212
-- Name: stuff_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stuff_id_seq', 3, true);


--
-- TOC entry 3220 (class 2606 OID 16429)
-- Name: adonis_schema adonis_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.adonis_schema
    ADD CONSTRAINT adonis_schema_pkey PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 16450)
-- Name: stuff stuff_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stuff
    ADD CONSTRAINT stuff_pkey PRIMARY KEY (id);


-- Completed on 2023-05-13 09:39:11 -05

--
-- PostgreSQL database dump complete
--

