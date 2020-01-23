import { Router, Request, Response } from 'express';

const ROUTER = Router();

ROUTER.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        msg: "Todo esta bien"
    });
});

ROUTER.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
    });
});

ROUTER.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default ROUTER;