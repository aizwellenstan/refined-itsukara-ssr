"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This data is borrowed from wikiwiki.jp/nijisanji
 * https://bit.ly/2ZxLFlg
 */
var MITO_TSUKINO = '32';
var HIMAWARI_HONMA = '34';
var RIN_SHIZUKA = '11';
var KAEDE_HIGUCHI = '38';
var YUIKA_SHIINA = '37';
var SAKU_SASAKI = '10';
var UTAKO_SUZUKA = '51';
var ROA_YUZUKI = '63';
var KUZUHA = '8';
var ALICE_MONONOBE = '3';
var SISTER_CLAIRE = '15';
var MIKOTO_RINDOU = '45';
var RYUSHEN = '46';
var LIZE_HELESTA = '72';
var KANAE = '7';
var ERA_OTOGIBARA = '68';
var BELMOND_BANDERAS = '20';
var MIREI_GUNDO = '62';
var ANGE_KATRINA = '70';
var CHIHIRO_YUKI = '17';
var RION_TAKAMIYA = '58';
var LULU_SUZUHARA = '73';
var ELU = '14';
var KAZAKI_MORINAKA = '36';
var TOYA_KENMOCHI = '23';
var DOLA = '19';
var CHITOSE_KUDO = '61';
var KIZUKU_YASHIRO = '43';
var ICHIGO_USHIMI = '27';
var TOKO_INUI = '71';
var MUGI_IENAGA = '9';
var JOE_RIKIICHI = '16';
var MEIJI_WARABEDA = '60';
var MOIRA = '2';
var DEBIDEBI_DEBIRU = '18';
var KEISUKE_MAIMOTO = '47';
var CHAIKA_HANABATAKE = '48';
var ARS_ALMAL = '87';
var MAKAINO_RIRIMU = '56';
var SETSUNA = '54';
var HAYATO_KAGAMI = '84';
var YOUKO_AKABANE = '4';
var KAI_MAYUZUMI = '89';
var RIRI_YUHI = '12';
var KAKERU_YUMEOI = '26';
var FUYUKI_HAKASE = '85';
var KOU_UZUKI = '24';
var RENA_YORUMI = '86';
var RITSUKI_SAKURA = '35';
var SAYO_AMEMORI = '53';
var SHIBA_KUROI = '59';
var SHOICHI_KANDA = '44';
var EX_ALBIO = '79';
var AKI_SUZUYA = '13';
var MANAMI_AIZONO = '75';
var GAKU_FUSHIMI = '21';
var NUI_SOCIERE = '83';
var AKINA_SAEGUSA = '74';
var MARIN_HAYAMA = '82';
var CHIMA_MACHITA = '41';
var HAJIME_SHIBUYA = '40';
var TAMAKI_FUMINO = '30';
var KASUMI_IZUMO = '1';
var HARUKA_ONOMACHI = '64';
var MASARU_SUZUKI = '5';
var KYOKO_TODOROKI = '49';
var UIHA_AIBA = '88';
var CHINAMI_ACHIKITA = '50';
var GILZAREN_III = '6';
var MOMO_AZUCHI = '28';
var RINE_YAGURUMA = '42';
var SHIZUKU_TSUKIMI = '33';
var MIYAKO_SETO = '66';
var HINA_ASUKA = '55';
var AIR_HARUSAKI = '31';
var NARU_NARUSE = '29';
/*
const MAHIRO_YUKISHIRO = '76';
const LEVI_ELIPHA = '78';
const TSUMUGU_KATARIBE = '65';
const KOKORO_AMAMIYA = '91';
const ELI_CONIFER = '92';
const RATNA_PETIT = '90';
*/
// Placeholders
var AZUMA_NAKAO = '-1';
var YUZU_HASSAKU = '-2';
var MORURU_YAMIYONO = '-3';
var UMIYASHANO_KAMI = '-4';
var TSUKASA_TENKAI = '-5';
var FAIRYS = '-6';
exports.teams = [
    {
        id: '85168902-ca3f-47a2-8170-f0092e91b390',
        name: 'あくまどーじょー',
        performerIds: [DEBIDEBI_DEBIRU, ROA_YUZUKI],
    },
    {
        id: '9c71a1fc-6fbe-4cdc-bdea-6283f5e4b907',
        name: '悪夢組',
        performerIds: [DEBIDEBI_DEBIRU, JOE_RIKIICHI],
    },
    {
        id: 'cb82016a-7c68-4b35-9267-80d5b7652d14',
        name: 'アズゆず',
        performerIds: [AZUMA_NAKAO, YUZU_HASSAKU],
    },
    {
        id: '4e31d71e-471c-43cc-87fd-c2e84c54aa54',
        name: 'aho',
        performerIds: [AKINA_SAEGUSA, ERA_OTOGIBARA, TOKO_INUI],
    },
    {
        id: 'e92533fa-75df-4ada-a5cc-ff3ff3460619',
        name: '雨森久遠',
        performerIds: [SAYO_AMEMORI, CHITOSE_KUDO],
    },
    {
        id: 'e0d409af-55f3-4a85-9fd6-702271a825cf',
        name: 'アリストロベリー',
        performerIds: [ICHIGO_USHIMI, ALICE_MONONOBE],
    },
    {
        id: '3c01e5e6-20d1-4d5b-924a-472c50297c6d',
        name: 'ありめいじす',
        performerIds: [ALICE_MONONOBE, MEIJI_WARABEDA],
    },
    {
        id: 'e7684d86-6d17-4115-bb18-a377abf9d6b7',
        name: 'あん・で・とこ',
        performerIds: [DEBIDEBI_DEBIRU, TOKO_INUI, ANGE_KATRINA],
    },
    {
        id: '0753db95-57a4-41f6-8843-4e77c0a37af8',
        name: 'いずもるる',
        performerIds: [MORURU_YAMIYONO, KASUMI_IZUMO],
    },
    {
        id: '297178d1-338f-4003-b5c3-d5b1e3322e0c',
        name: 'いちガク',
        performerIds: [ICHIGO_USHIMI, GAKU_FUSHIMI],
    },
    {
        id: '248d7f73-5eee-4999-bac6-82c40fd441fa',
        name: 'いちひま',
        performerIds: [ICHIGO_USHIMI, HIMAWARI_HONMA],
    },
    {
        id: 'a97266a6-d9d4-424d-9b15-c9987bb5a142',
        name: '1期生出身',
        performerIds: [
            MITO_TSUKINO,
            CHIHIRO_YUKI,
            ELU,
            KAEDE_HIGUCHI,
            RIN_SHIZUKA,
            HAJIME_SHIBUYA,
            AKI_SUZUYA,
            MOIRA,
        ],
    },
    {
        id: '38ce5e51-1cba-4d34-ac47-af38238b9b80',
        name: 'うーちー',
        performerIds: [CHIHIRO_YUKI, UTAKO_SUZUKA],
    },
    {
        id: 'de685358-7c39-4de0-aa67-9a8ab7d217f5',
        name: 'うさちゃんクラブwithB',
        performerIds: [SHOICHI_KANDA, AIR_HARUSAKI, MIREI_GUNDO, ROA_YUZUKI],
    },
    {
        id: '9bb0034c-0264-44a3-8211-dbb7d2c0ab80',
        name: 'うたかざ',
        performerIds: [UTAKO_SUZUKA, KAZAKI_MORINAKA],
    },
    {
        id: 'b23e1ce7-a6b2-41ff-8b79-09e3483cc7c7',
        name: 'うたみこ',
        performerIds: [UTAKO_SUZUKA, MIKOTO_RINDOU],
    },
    {
        id: '0ac635d3-8291-440a-a9f9-0e1f4dfef73c',
        name: 'うたみこバネ卍',
        performerIds: [UTAKO_SUZUKA, YOUKO_AKABANE, SETSUNA, MIKOTO_RINDOU],
    },
    {
        id: '9cd57e64-1d93-4c89-b538-22011879058a',
        name: 'ATM',
        performerIds: [ALICE_MONONOBE, TOYA_KENMOCHI, KAZAKI_MORINAKA],
    },
    {
        id: '31656489-2574-4284-9c2c-67efd70bc7e6',
        name: 'エクレア',
        performerIds: [ELU, SISTER_CLAIRE],
    },
    {
        id: 'b2d33825-1a35-41c3-98b5-d350da999a92',
        name: 'エビ仙',
        performerIds: [RYUSHEN, EX_ALBIO],
    },
    {
        id: 'b5d5ff2e-ce17-445a-a21a-afa4057ef9cf',
        name: 'エビチリ',
        performerIds: [AKINA_SAEGUSA, EX_ALBIO],
    },
    {
        id: '87215908-7573-4b80-9230-616068946a99',
        name: 'ERRors',
        performerIds: [ELU, RIRI_YUHI, RYUSHEN],
    },
    {
        id: 'b0863896-0721-42ee-ab7e-02fa131a931c',
        name: 'えるかざガク',
        performerIds: [ELU, GAKU_FUSHIMI, KAZAKI_MORINAKA],
    },
    {
        id: 'bbb74caa-f71b-43ff-a092-b70cf4970b21',
        name: 'OTN組',
        performerIds: [AZUMA_NAKAO, CHAIKA_HANABATAKE, KIZUKU_YASHIRO],
    },
    {
        id: '81019b5a-980b-4226-a781-210284037008',
        name: 'おしぃりぃ',
        performerIds: [MAKAINO_RIRIMU, YUIKA_SHIINA],
    },
    {
        id: 'adf6293d-e2ed-4fc0-9091-b806dd56559b',
        name: 'おしぃりぃまわり',
        performerIds: [HIMAWARI_HONMA, MAKAINO_RIRIMU, YUIKA_SHIINA],
    },
    {
        id: '502dcad8-f4e5-4690-9903-03a0440fb56c',
        name: 'おっさんゲームス',
        performerIds: [KIZUKU_YASHIRO, KEISUKE_MAIMOTO],
    },
    {
        id: '22fc957c-7c07-4296-8ff8-264ff07cdaf4',
        name: '漢組(初代)',
        performerIds: [HAJIME_SHIBUYA, AKI_SUZUYA],
    },
    {
        id: 'e32fe742-7bb4-4e2e-aa9f-e38b30666c2a',
        name: '漢組',
        performerIds: [
            HAJIME_SHIBUYA,
            AKI_SUZUYA,
            GAKU_FUSHIMI,
            GILZAREN_III,
            TOYA_KENMOCHI,
        ],
    },
    {
        id: 'e35c747c-d5c6-4e24-839a-201d79e2d127',
        name: 'おなえどし組',
        performerIds: [KASUMI_IZUMO, MASARU_SUZUKI, KOU_UZUKI],
    },
    {
        id: 'db28cae2-b39a-478c-a459-6ab25ce8066a',
        name: 'おののみれい',
        performerIds: [MIREI_GUNDO, HARUKA_ONOMACHI],
    },
    {
        id: 'e627cb73-8f24-4bfb-a6ac-7260971eadcf',
        name: 'おりコウ',
        performerIds: [MAKAINO_RIRIMU, KOU_UZUKI],
    },
    {
        id: 'b1d67b27-24f7-4901-8356-8f46210ec5bc',
        name: '女の嫌なところ',
        performerIds: [SAKU_SASAKI, YUIKA_SHIINA, MIREI_GUNDO, ERA_OTOGIBARA],
    },
    {
        id: '6d437ae6-4607-4eb4-b60c-fd805d60a9fe',
        name: '解散GIG',
        performerIds: [YOUKO_AKABANE, SAKU_SASAKI, YUIKA_SHIINA, RYUSHEN],
    },
    {
        id: 'f36c4fd6-60dc-4459-873f-4c075790baaf',
        name: '楓と美兎',
        performerIds: [MITO_TSUKINO, KAEDE_HIGUCHI],
    },
    {
        id: 'dde96e6a-3c9f-4740-b69c-b636e867389d',
        name: 'かえる',
        performerIds: [ELU, KAEDE_HIGUCHI],
    },
    {
        id: '26f3b5b8-349b-4edb-9819-97909bf3a227',
        name: 'ガチ屑農家',
        performerIds: [
            MAKAINO_RIRIMU,
            YUIKA_SHIINA,
            CHAIKA_HANABATAKE,
            KEISUKE_MAIMOTO,
        ],
    },
    {
        id: 'e79df972-cbef-4ef3-90ee-6dc283957ed4',
        name: '叶え葉',
        performerIds: [KANAE, YOUKO_AKABANE],
    },
    {
        id: '6f3b408f-b4c0-40d9-b311-c656aacc1a6a',
        name: 'かなしいくず',
        performerIds: [KANAE, YUIKA_SHIINA, KUZUHA],
    },
    {
        id: '5a36c36b-3e06-4847-8a41-939f27afcba4',
        name: 'かなしいな',
        performerIds: [KANAE, YUIKA_SHIINA],
    },
    {
        id: '09c3253c-4531-4ca4-9527-f6502b296f0f',
        name: 'かなふぇあ',
        performerIds: [KANAE, FAIRYS],
    },
    {
        id: '4df48895-1994-402f-a256-bc1e26ba485a',
        name: 'かなめいじー',
        performerIds: [KANAE, MEIJI_WARABEDA],
    },
    {
        id: 'a4a7e749-eff9-4c3a-b977-b246715c146c',
        name: 'がぶりえら',
        performerIds: [MEIJI_WARABEDA, ERA_OTOGIBARA],
    },
    {
        id: '4a6768ab-b1e5-4391-bd0a-47b16e1d63da',
        name: 'ギバライカ',
        performerIds: [CHAIKA_HANABATAKE, ERA_OTOGIBARA],
    },
    {
        id: 'af267812-66db-45a0-8b23-b21c50badb37',
        name: 'くさおしぃりぃ',
        performerIds: [SAKU_SASAKI, MAKAINO_RIRIMU, KUZUHA, YUIKA_SHIINA],
    },
    {
        id: '348f5e53-321f-407d-aa8d-6e7a5e6365df',
        name: '葛神社',
        performerIds: [KUZUHA, KIZUKU_YASHIRO, SHOICHI_KANDA],
    },
    {
        id: '81912ec9-ffc0-4bc2-b45a-51ad912d7ea1',
        name: 'くずばねおしぃりぃ',
        performerIds: [YOUKO_AKABANE, MAKAINO_RIRIMU, KUZUHA, YUIKA_SHIINA],
    },
    {
        id: 'c105b7fb-f2fa-4eb0-967e-2db47e73dfda',
        name: 'くずンボ',
        performerIds: [KUZUHA, RITSUKI_SAKURA],
    },
    {
        id: '4d325f5f-69ab-4b00-b620-7fdf14bf7f3e',
        name: 'くそざこGaming',
        performerIds: [KOU_UZUKI, RION_TAKAMIYA, BELMOND_BANDERAS],
    },
    // {
    //   id: '58fe4660-d1cb-4367-ab43-ede501d387cf',
    //   name: 'くまもっさん',
    //   performerIds: [HIMAWARI_HONMA, KUZUHA],
    // },
    {
        id: 'b7bd4f00-f8c7-4425-a0c1-7b7c8fdf7d2f',
        name: '海月',
        performerIds: [UMIYASHANO_KAMI, RITSUKI_SAKURA],
    },
    {
        id: '164899ca-468b-40ea-af2c-c9ddea7010cb',
        name: 'グリーンルージュ',
        performerIds: [CHAIKA_HANABATAKE, JOE_RIKIICHI],
    },
    {
        id: 'd8a45dd2-463e-4997-8ddf-2ed8a87a4e4a',
        name: 'cresc.',
        performerIds: [DOLA, SISTER_CLAIRE, RYUSHEN],
    },
    {
        id: '40c5710f-4b5e-4cb8-bdfb-65d74ee2946b',
        name: '黒ノ火廻',
        performerIds: [KANAE, HIMAWARI_HONMA, KUZUHA],
    },
    {
        id: 'e4536b91-fcd2-41bb-8148-2ebd7561c956',
        name: 'ChroNoiR',
        performerIds: [KANAE, KUZUHA],
    },
    {
        id: '312514f3-5d84-4a10-b70c-a7497c934b7b',
        name: 'ぐんかん',
        performerIds: [SHOICHI_KANDA, MIREI_GUNDO],
    },
    {
        id: '5893f640-fa03-4caa-b6de-282423e7c698',
        name: '月下美人',
        performerIds: [YOUKO_AKABANE, YUIKA_SHIINA, MIKOTO_RINDOU],
    },
    {
        id: '9daad65a-0453-44c7-b707-bc140492dfd2',
        name: 'こあくまん',
        performerIds: [MAKAINO_RIRIMU, ROA_YUZUKI],
    },
    {
        id: 'a0ed3bba-6f21-4bfb-b231-f6fe4edf589d',
        name: '紅白アホ合戦',
        performerIds: [MEIJI_WARABEDA, CHITOSE_KUDO],
    },
    {
        id: '9fce6fac-5388-4991-969e-966243aa55fa',
        name: '黒夢町',
        performerIds: [CHIMA_MACHITA, KAKERU_YUMEOI, SHIBA_KUROI],
    },
    {
        id: 'fd40d2ac-3bc6-43e4-a102-cff008f7a53b',
        name: 'サイコ組',
        performerIds: [CHIHIRO_YUKI, ELU],
    },
    {
        id: 'af9923c6-dcf8-43d8-8596-b4818f7687ad',
        name: 'さくゆい',
        performerIds: [SAKU_SASAKI, YUIKA_SHIINA],
    },
    {
        id: '684ca659-8d26-484e-a9d0-6efe37807aef',
        name: '三者面団',
        performerIds: [BELMOND_BANDERAS, MIREI_GUNDO, ROA_YUZUKI],
    },
    {
        id: '04819f44-1d06-448b-a1cb-0609e8f0ff75',
        name: 'さんばか',
        performerIds: [TOKO_INUI, ANGE_KATRINA, LIZE_HELESTA],
    },
    {
        id: 'a54e4589-d083-4f44-87b7-7f3d76a98668',
        name: 'シージ部',
        performerIds: [
            YUIKA_SHIINA,
            KANAE,
            KUZUHA,
            SHIZUKU_TSUKIMI,
            ANGE_KATRINA,
            RENA_YORUMI,
        ],
    },
    {
        id: '9d70efd3-9bf3-442e-9a05-d4fe8dcff141',
        name: 'JS組',
        performerIds: [CHIHIRO_YUKI, ICHIGO_USHIMI, KAZAKI_MORINAKA],
    },
    {
        id: 'fd59ab55-c523-44c7-ba03-d6a4817fd771',
        name: 'JK組',
        performerIds: [MITO_TSUKINO, KAEDE_HIGUCHI, RIN_SHIZUKA],
    },
    {
        id: 'd402f90f-406b-4cc3-b1c4-5ed3ccb82b6a',
        name: 'JCグミ',
        performerIds: [KASUMI_IZUMO, MOMO_AZUCHI, YUZU_HASSAKU],
    },
    {
        id: '8cc6cf05-b1da-4ed7-98d1-58bcd5375547',
        name: 'しかばねぱんだ',
        performerIds: [YOUKO_AKABANE, RYUSHEN],
    },
    {
        id: 'd20b0eae-e606-45a6-b358-6947419dadf4',
        name: '渋谷大ガク',
        performerIds: [HAJIME_SHIBUYA, GAKU_FUSHIMI],
    },
    // {
    //   id: '7f17d1d9-d3e1-4289-a13f-41a892aebae7',
    //   name: '囚人組',
    //   performerIds: [HAJIME_SHIBUYA, KANAE, KUZUHA, TSUKASA_TENKAI, FAIRYS],
    // },
    {
        id: '40e4c1cd-e5f6-4284-9abc-59d0e1503ef3',
        name: '十人十色',
        performerIds: [
            SAKU_SASAKI,
            MAKAINO_RIRIMU,
            YUIKA_SHIINA,
            RION_TAKAMIYA,
            MIKOTO_RINDOU,
            CHITOSE_KUDO,
            MIREI_GUNDO,
            ROA_YUZUKI,
            ANGE_KATRINA,
            LIZE_HELESTA,
        ],
    },
    {
        id: 'ebbb14c5-271a-450c-b0e6-cb07956713e0',
        name: '女子校花畑',
        performerIds: [YUIKA_SHIINA, CHAIKA_HANABATAKE, KOU_UZUKI, JOE_RIKIICHI],
    },
    {
        id: '9a11d286-2894-4a3d-8278-d35d743ef4ea',
        name: 'シリンソウ',
        performerIds: [KANAE, YOUKO_AKABANE, HIMAWARI_HONMA, KUZUHA],
    },
    {
        id: 'c798694b-1d93-4c27-9cf4-96ec0e303ce3',
        name: '深夜三傑RKS',
        performerIds: [RIN_SHIZUKA, HAJIME_SHIBUYA, KANAE],
    },
    {
        id: '9abc3a48-fb68-4ec8-9af1-352b05ca3dc0',
        name: 'すとろべあ',
        performerIds: [ICHIGO_USHIMI, KAZAKI_MORINAKA],
    },
    {
        id: 'e3d3e28e-84cf-49b9-9c34-aad4dcffc180',
        name: 'ストロベル',
        performerIds: [ICHIGO_USHIMI, BELMOND_BANDERAS],
    },
    {
        id: '37a9f253-d6f6-4e38-b107-fcba681e82a6',
        name: 'SMC組',
        performerIds: [FUYUKI_HAKASE, HAYATO_KAGAMI, RENA_YORUMI],
    },
    // {
    //   id: '85bf19d7-f96c-41a8-9769-514f9848ddc2',
    //   name: 'すもも幼稚園',
    //   performerIds: [
    //     ICHIGO_USHIMI,
    //     SAKU_SASAKI,
    //     MORURU_YAMIYONO,
    //     HIMAWARI_HONMA,
    //     MAKAINO_RIRIMU,
    //   ],
    // },
    // {
    //   id: '296cb32a-fc15-422e-9841-3da8fa7f043f',
    //   name: 'だいさんじ杯',
    //   performerIds: [
    //     HAJIME_SHIBUYA,
    //     KANAE,
    //     MAKAINO_RIRIMU,
    //     KUZUHA,
    //     YUIKA_SHIINA,
    //     CHAIKA_HANABATAKE,
    //     KOU_UZUKI,
    //     KEISUKE_MAIMOTO,
    //     TSUKASA_TENKAI,
    //   ],
    // },
    {
        id: '7a14edbe-4e29-4ee3-886c-cce11334232d',
        name: '鷹匠',
        performerIds: [RION_TAKAMIYA, JOE_RIKIICHI],
    },
    {
        id: 'e0950a5f-4543-4754-9993-a200c41786bc',
        name: 'ダブルスリーブ',
        performerIds: [KIZUKU_YASHIRO, HAYATO_KAGAMI],
    },
    {
        id: 'e8bbc5d0-5b6d-4482-bbfe-945411d24490',
        name: 'ダレパンダ',
        performerIds: [SAKU_SASAKI, BELMOND_BANDERAS],
    },
    {
        id: 'f51dffe6-0778-493e-9439-4227a88eee01',
        name: 'ちーかざちー',
        performerIds: [CHIHIRO_YUKI, KAZAKI_MORINAKA],
    },
    {
        id: '56a4d483-4702-4e75-bb3c-a29abd76dda9',
        name: 'ちーハジ',
        performerIds: [CHIHIRO_YUKI, HAJIME_SHIBUYA],
    },
    {
        id: '932de1d1-6bec-4128-ace3-c9080fbdb393',
        name: '乳山',
        performerIds: [MARIN_HAYAMA, NUI_SOCIERE],
    },
    {
        id: 'dd60619f-10af-4017-867d-5f624d4bb3e2',
        name: 'ちとでびる',
        performerIds: [DEBIDEBI_DEBIRU, CHITOSE_KUDO],
    },
    {
        id: '1688816f-29a0-4aeb-bb72-c625c5adf7aa',
        name: '血みどろコラボ',
        performerIds: [
            ICHIGO_USHIMI,
            GAKU_FUSHIMI,
            MORURU_YAMIYONO,
            HIMAWARI_HONMA,
            KUZUHA,
        ],
    },
    {
        id: '7e1a01df-4963-4d15-b184-90170dadee9b',
        name: 'ちりつも',
        performerIds: [MAKAINO_RIRIMU, CHITOSE_KUDO],
    },
    // {
    //   id: 'b681a720-2f2d-4b0a-bb82-8c4217a2d0d9',
    //   name: '角組',
    //   performerIds: [MORURU_YAMIYONO, DOLA, UMIYASHANO_KAMI],
    // },
    {
        id: '69a358f1-10f8-4d9e-95ea-788c030eefdc',
        name: 'でびリオン',
        performerIds: [RION_TAKAMIYA, DEBIDEBI_DEBIRU],
    },
    {
        id: '65785245-60f6-4a9b-8e36-e39ca2e1cde0',
        name: 'でびるる',
        performerIds: [DEBIDEBI_DEBIRU, LULU_SUZUHARA],
    },
    {
        id: '145860b0-f002-48a3-8937-68a4b67c39af',
        name: 'でろちー',
        performerIds: [CHIHIRO_YUKI, KAEDE_HIGUCHI],
    },
    {
        id: 'bdceab0b-6e37-44ea-99cd-c941ad2860b6',
        name: 'でろもい',
        performerIds: [KAEDE_HIGUCHI, MOIRA],
    },
    {
        id: '2b13760f-910e-4f99-a40f-7a3675fb7b9d',
        name: 'でろもいちー',
        performerIds: [CHIHIRO_YUKI, KAEDE_HIGUCHI, MOIRA],
    },
    {
        id: '00828dd8-d860-47d2-8500-e05e6f1e0db4',
        name: 'デロロギ',
        performerIds: [KAEDE_HIGUCHI, GILZAREN_III, KYOKO_TODOROKI],
    },
    // {
    //   id: 'b944d9d1-6236-46d8-bd89-35e922b00d22',
    //   name: '天界卓',
    //   performerIds: [MOIRA, ICHIGO_USHIMI, MUGI_IENAGA, RION_TAKAMIYA, DEBIDEBI_DEBIRU],
    // },
    {
        id: 'a5778bae-66d5-4fdc-9727-3a894a2279ae',
        name: 'Twinkle',
        performerIds: [
            MITO_TSUKINO,
            ALICE_MONONOBE,
            HIMAWARI_HONMA,
            SISTER_CLAIRE,
            MIKOTO_RINDOU,
        ],
    },
    {
        id: '4de16196-5f9c-4e1e-a229-dd6c5f7d1659',
        name: '刀かざ',
        performerIds: [TOYA_KENMOCHI, KAZAKI_MORINAKA],
    },
    {
        id: '1bc8c7d2-f3ad-428e-8da7-91fba9426b3c',
        name: '童話組',
        performerIds: [ALICE_MONONOBE, MEIJI_WARABEDA, ERA_OTOGIBARA],
    },
    {
        id: '4f090b40-7bcb-430e-b392-5ac7a9e732aa',
        name: '咎ノワール',
        performerIds: [GAKU_FUSHIMI, TOYA_KENMOCHI, KUZUHA, KANAE],
    },
    {
        id: '710d9824-6e31-4dda-ae13-2dd4342eceb1',
        name: '†咎人†',
        performerIds: [GAKU_FUSHIMI, TOYA_KENMOCHI],
    },
    {
        id: 'd8fdca60-722b-49d1-aebc-51a169e0144f',
        name: 'ド葛本社',
        performerIds: [HIMAWARI_HONMA, KUZUHA, DOLA, KIZUKU_YASHIRO],
    },
    {
        id: '8f784e92-881e-4273-8b9c-ac9296e0612e',
        name: 'ド葛本社オルタ',
        performerIds: [
            AZUMA_NAKAO,
            CHAIKA_HANABATAKE,
            RYUSHEN,
            RION_TAKAMIYA,
            DEBIDEBI_DEBIRU,
            JOE_RIKIICHI,
        ],
    },
    {
        id: '170d96b8-24f4-4277-8955-6729ca002c55',
        name: 'トライト',
        performerIds: [CHIHIRO_YUKI, ICHIGO_USHIMI, GAKU_FUSHIMI],
    },
    {
        id: 'c5252d90-9592-49b1-ac35-fc04283bb32d',
        name: 'ドラひま',
        performerIds: [HIMAWARI_HONMA, DOLA],
    },
    {
        id: 'e6b36eda-191b-4608-afa2-30a855ec9141',
        name: 'トリガー',
        performerIds: [RIRI_YUHI, GAKU_FUSHIMI, TOYA_KENMOCHI],
    },
    {
        id: '11aa8988-cca7-4bd2-b513-bdb7578f0f9f',
        name: 'NZMN',
        performerIds: [KOU_UZUKI, AIR_HARUSAKI, NARU_NARUSE, KAKERU_YUMEOI],
    },
    {
        id: 'f2e93601-a9cc-4cd4-a10b-64c5af64a4af',
        name: 'にじいろきゃんD→☆',
        performerIds: [
            RIRI_YUHI,
            KAZAKI_MORINAKA,
            SISTER_CLAIRE,
            CHAIKA_HANABATAKE,
            DEBIDEBI_DEBIRU,
            RITSUKI_SAKURA,
            CHINAMI_ACHIKITA,
        ],
    },
    {
        id: '4251a473-6691-4f0a-a7db-d041c3e372db',
        name: 'にじくじ7',
        performerIds: [
            MITO_TSUKINO,
            ELU,
            KAEDE_HIGUCHI,
            RIN_SHIZUKA,
            MUGI_IENAGA,
            ALICE_MONONOBE,
            TOYA_KENMOCHI,
        ],
    },
    {
        id: '9bd3cac0-f5db-43b7-b7c5-21607526a716',
        name: 'にじさんじGALS',
        performerIds: [KAEDE_HIGUCHI, SAKU_SASAKI, YUIKA_SHIINA, RION_TAKAMIYA],
    },
    {
        id: 'b2f83e9a-66f4-4ea2-a8b7-f569eda5f778',
        name: 'にじさんじ狂犬ズ',
        performerIds: [CHIMA_MACHITA, SHIBA_KUROI],
    },
    {
        id: '81942606-c91d-4991-a087-c066746b3ec4',
        name: 'にじさんじ矩形波倶楽部',
        performerIds: [MORURU_YAMIYONO, KIZUKU_YASHIRO],
    },
    {
        id: 'efd9d64b-241a-474a-bb11-63d986200237',
        name: 'にじさんじスベ狼',
        performerIds: [
            CHAIKA_HANABATAKE,
            KIZUKU_YASHIRO,
            KEISUKE_MAIMOTO,
            JOE_RIKIICHI,
            KAKERU_YUMEOI,
            AKINA_SAEGUSA,
        ],
    },
    {
        id: 'c797e0af-b83e-4d5c-ae3c-216a08df583d',
        name: 'にじさんじドリクラーズ',
        performerIds: [
            AZUMA_NAKAO,
            CHAIKA_HANABATAKE,
            KIZUKU_YASHIRO,
            KEISUKE_MAIMOTO,
            KAKERU_YUMEOI,
        ],
    },
    {
        id: '4c527859-e509-4c14-92a6-bae696308330',
        name: 'にじさんじバスタード',
        performerIds: [KANAE, KUZUHA, KOU_UZUKI],
    },
    {
        id: 'e6831bea-dd15-4f9d-9d40-6c2b9e3bffd3',
        name: 'にじさんじ Project Winter',
        performerIds: [
            KANAE,
            KUZUHA,
            SAKU_SASAKI,
            YUIKA_SHIINA,
            LIZE_HELESTA,
            ANGE_KATRINA,
            TSUKASA_TENKAI,
            FAIRYS,
        ],
    },
    {
        id: 'b0efd36f-33ee-42e7-a772-1ad01978e284',
        name: 'にじさんじポン酢',
        performerIds: [KASUMI_IZUMO, NUI_SOCIERE, FUYUKI_HAKASE, RENA_YORUMI],
    },
    {
        id: '9dcbb016-f944-40d0-90ae-9be53be5a507',
        name: 'にじさんじマスコッツ',
        performerIds: [CHIMA_MACHITA, KAKERU_YUMEOI, MIREI_GUNDO, LIZE_HELESTA],
    },
    {
        id: '9e8a70e1-6f6f-43c2-9f12-76dc61eb42b0',
        name: 'にじさんじLOSERS',
        performerIds: [AZUMA_NAKAO, CHAIKA_HANABATAKE],
    },
    {
        id: '4eb0bad3-ba64-4ca5-80d3-84e22c4e14ef',
        name: 'にじさんじレジスタンス(2人)',
        performerIds: [YUIKA_SHIINA, CHAIKA_HANABATAKE],
    },
    {
        id: '8d984709-8401-4519-bbb1-fca6e30ddd04',
        name: 'にじさんじレジスタンス(4人)',
        performerIds: [SAKU_SASAKI, YUIKA_SHIINA, CHAIKA_HANABATAKE, RYUSHEN],
    },
    {
        id: '22b75b24-b7cf-4252-9805-0e2fd3602047',
        name: 'にじさんじレジスタンス',
        performerIds: [
            ALICE_MONONOBE,
            SAKU_SASAKI,
            YUIKA_SHIINA,
            CHAIKA_HANABATAKE,
            MOMO_AZUCHI,
            RYUSHEN,
        ],
    },
    {
        id: 'de2789e3-f0eb-48b4-9888-74a3b63bc9a5',
        name: 'にじロック',
        performerIds: [
            KYOKO_TODOROKI,
            RYUSHEN,
            SAYO_AMEMORI,
            JOE_RIKIICHI,
            KAKERU_YUMEOI,
            AKINA_SAEGUSA,
            HAYATO_KAGAMI,
        ],
    },
    {
        id: 'a50df19e-9c8e-4b85-9f9b-a2db819112cc',
        name: 'にきさんきゲーマーズ',
        performerIds: [
            SAKU_SASAKI,
            HIMAWARI_HONMA,
            MORURU_YAMIYONO,
            MAKAINO_RIRIMU,
            KUZUHA,
            SETSUNA,
            YUIKA_SHIINA,
        ],
    },
    {
        id: '061f0423-015f-44ec-a5dd-0ef27c218385',
        name: 'N₠V₠R ₠NDs',
        performerIds: [KYOKO_TODOROKI, KOU_UZUKI, KEISUKE_MAIMOTO],
    },
    {
        id: '5cd48ef0-8466-4c5e-af48-743a8c00422a',
        name: 'はぁと組💙',
        performerIds: [CHIHIRO_YUKI, ALICE_MONONOBE],
    },
    {
        id: '60faf53a-5841-40ef-9cd8-a10d37427372',
        name: 'BACK STAGEs',
        performerIds: [KYOKO_TODOROKI, MOMO_AZUCHI, YUZU_HASSAKU, KOU_UZUKI],
    },
    // {
    //   id: '683a9902-6448-444e-8c17-826fe07ca1b4',
    //   name: '発色オタク三銃士',
    //   performerIds: [AIR_HARUSAKI, HINA_ASUKA],
    // },
    {
        id: 'bd6754ae-f97e-40db-aa3f-a41619faf153',
        name: 'ハッピートリガー',
        performerIds: [MUGI_IENAGA, RIRI_YUHI, GAKU_FUSHIMI, TOYA_KENMOCHI],
    },
    {
        id: '0f122b60-7a23-4350-87fc-af50170a8f57',
        name: 'バトロワAチーム',
        performerIds: [
            MAKAINO_RIRIMU,
            KUZUHA,
            KYOKO_TODOROKI,
            KIZUKU_YASHIRO,
            KOU_UZUKI,
            KEISUKE_MAIMOTO,
            CHITOSE_KUDO,
        ],
    },
    {
        id: '82e59d0f-3900-4903-bf1c-c075970fb722',
        name: 'ばねおしぃりぃ',
        performerIds: [YOUKO_AKABANE, MAKAINO_RIRIMU, YUIKA_SHIINA],
    },
    {
        id: 'fb985c0c-feeb-4a41-9abc-e40a6b15c876',
        name: 'はるみや',
        performerIds: [HARUKA_ONOMACHI, MIYAKO_SETO],
    },
    {
        id: 'f71d7ae6-00fa-4a7c-9695-323738cd2900',
        name: 'BGクラブ',
        performerIds: [MOIRA, UTAKO_SUZUKA, KAZAKI_MORINAKA],
    },
    {
        id: '0e7a258f-c9ab-4e09-974d-01debf33b18b',
        name: 'ひなちなちま',
        performerIds: [HINA_ASUKA, CHIMA_MACHITA, CHINAMI_ACHIKITA],
    },
    {
        id: 'fdbebac3-b2cd-44cf-a6e3-b2983a5b55ab',
        name: 'ひまンボ',
        performerIds: [HIMAWARI_HONMA, RITSUKI_SAKURA],
    },
    {
        id: 'c2faf894-6b55-4046-ab2c-8dcac84b7e24',
        name: 'ヒモと財布',
        performerIds: [CHINAMI_ACHIKITA, RINE_YAGURUMA],
    },
    {
        id: '369f8efc-23a4-4872-aac1-f1d8af3cb376',
        name: 'pure♡palet',
        performerIds: [ALICE_MONONOBE, SISTER_CLAIRE],
    },
    {
        id: 'e527d628-e17e-4b96-b049-a98697e41705',
        name: 'ひよこぱんつ',
        performerIds: [SAKU_SASAKI, LIZE_HELESTA],
    },
    // {
    //   id: 'af0f5e8a-f66a-46fb-af8c-6c5781d36259',
    //   name: 'Vtuber甲子園',
    //   performerIds: [YUIKA_SHIINA, KEISUKE_MAIMOTO, TSUKASA_TENKAI],
    // },
    // {
    //   id: '50d75161-d6b7-4d31-bd6e-f2e1152a36cd',
    //   name: 'V雪人狼',
    //   performerIds: [
    //     MITO_TSUKINO,
    //     KAEDE_HIGUCHI,
    //     TOYA_KENMOCHI,
    //     HIMAWARI_HONMA,
    //     ERA_OTOGIBARA,
    //   ],
    // },
    {
        id: '325fe589-8472-41c4-81fa-9e4520cd765d',
        name: '4FFFF',
        performerIds: [HIMAWARI_HONMA, DOLA, RION_TAKAMIYA, DEBIDEBI_DEBIRU],
    },
    {
        id: '6dd0cfc9-3326-467a-b93a-5cb2fd6b5a11',
        name: 'ふゆれな',
        performerIds: [RENA_YORUMI, FUYUKI_HAKASE],
    },
    {
        id: '4a1afcc3-aba0-4841-adb6-2c33aecb712a',
        name: '白金魔法研究所',
        performerIds: [RION_TAKAMIYA, FUYUKI_HAKASE],
    },
    {
        id: '9a491b5b-6249-4824-93c0-9705c370b5fb',
        name: '不良不死',
        performerIds: [RYUSHEN, CHITOSE_KUDO],
    },
    {
        id: 'ed72fccf-8509-4db1-a075-232e145832cf',
        name: 'ぷりずむりりっく！',
        performerIds: [ICHIGO_USHIMI, MUGI_IENAGA, CHIHIRO_YUKI],
    },
    {
        id: '98905e88-3a5c-4066-b2aa-49561e69a46f',
        name: 'ぷりんず',
        performerIds: [CHIHIRO_YUKI, RITSUKI_SAKURA],
    },
    {
        id: '5c2a3473-1e8e-4b9d-8c89-75a7cff736f0',
        name: 'ぶるーず',
        performerIds: [KAI_MAYUZUMI, ARS_ALMAL, UIHA_AIBA],
    },
    {
        id: '134f6348-6ce9-4e32-a5c9-e66d1141f3ae',
        name: 'Fragrance5',
        performerIds: [ELU, UTAKO_SUZUKA, RIRI_YUHI, HIMAWARI_HONMA, SISTER_CLAIRE],
    },
    {
        id: '94e945f4-aa33-4852-987e-437101e43e40',
        name: 'ブレスト軍',
        performerIds: [CHIHIRO_YUKI, ICHIGO_USHIMI],
    },
    {
        id: '07fd03ba-0f2a-4da1-a1c6-eaa41b5a7e80',
        name: '紅ズワイガニ',
        performerIds: [AKINA_SAEGUSA, MANAMI_AIZONO],
    },
    {
        id: '2cafad82-105c-48a6-b1ba-6fc6539b3690',
        name: '紅ズワイガニぐんかん',
        performerIds: [AKINA_SAEGUSA, MANAMI_AIZONO, SHOICHI_KANDA, MIREI_GUNDO],
    },
    {
        id: '4248b643-eacb-4caa-b8cc-dc88dc9c73d1',
        name: 'ヘブンガールズ',
        performerIds: [CHIHIRO_YUKI, MOIRA],
    },
    {
        id: 'da3d13f2-cd1f-460b-aa86-a233fb1ecf09',
        name: '舞元力一',
        performerIds: [KEISUKE_MAIMOTO, JOE_RIKIICHI],
    },
    {
        id: 'ef29f97f-5888-479c-854a-5a8f2c84b7e1',
        name: 'まほすず',
        performerIds: [CHIHIRO_YUKI, AKI_SUZUYA],
    },
    {
        id: 'eb119549-ff6f-46f3-a7e4-7d15a580c25c',
        name: 'みかえる',
        performerIds: [MITO_TSUKINO, KAEDE_HIGUCHI, ELU],
    },
    {
        id: '8327ab53-8aea-427d-a5bb-ec9ea8b5b777',
        name: 'みこでび',
        performerIds: [MIKOTO_RINDOU, DEBIDEBI_DEBIRU],
    },
    {
        id: '8091077b-c368-41c7-89c7-58b7ddb3463d',
        name: 'みそしる',
        performerIds: [HAJIME_SHIBUYA, GAKU_FUSHIMI, KANAE, KUZUHA],
    },
    {
        id: 'ace9edde-9342-498c-a5e0-673878f6332f',
        name: 'みれロア',
        performerIds: [MIREI_GUNDO, ROA_YUZUKI],
    },
    {
        id: 'f8447173-573e-46bb-98ac-9f92d36bc4b3',
        name: 'むぎたま',
        performerIds: [MUGI_IENAGA, TAMAKI_FUMINO],
    },
    {
        id: '5befbca5-b55c-4dbb-8354-3a5d5a844689',
        name: 'メーブレストロベア',
        performerIds: [CHIHIRO_YUKI, KAEDE_HIGUCHI, ICHIGO_USHIMI, KAZAKI_MORINAKA],
    },
    {
        id: 'cde4323a-cf37-443e-9442-acd49c2d1c2b',
        name: 'もぐっとゆず',
        performerIds: [MASARU_SUZUKI, YUZU_HASSAKU],
    },
    {
        id: '8fd68a08-db08-4ef0-a4df-3d9add4b1f66',
        name: 'もちがえる',
        performerIds: [CHIHIRO_YUKI, ELU, KAEDE_HIGUCHI, MOIRA],
    },
    {
        id: 'cf73437f-c973-42e8-a0e3-afdd1bbcf071',
        name: '桃色冷蔵庫',
        performerIds: [ICHIGO_USHIMI, RIRI_YUHI],
    },
    {
        id: 'eea83918-9f89-426c-92f7-dd6a4f5ae2c8',
        name: 'もやしば',
        performerIds: [KAKERU_YUMEOI, SHIBA_KUROI],
    },
    {
        id: '5745dfb4-67cf-486c-8024-eba3bd914090',
        name: 'もるひま',
        performerIds: [MORURU_YAMIYONO, HIMAWARI_HONMA],
    },
    {
        id: 'e06eda65-27f6-4d0a-84f1-f64435b178e3',
        name: 'ヤンキー組《楓刀京明千葛》',
        performerIds: [
            KAEDE_HIGUCHI,
            TOYA_KENMOCHI,
            KYOKO_TODOROKI,
            AKINA_SAEGUSA,
            CHITOSE_KUDO,
            KUZUHA,
        ],
    },
    {
        id: '9248590f-f3f7-4e1a-a067-db36ef4e8891',
        name: 'ゆうやみ',
        performerIds: [CHIHIRO_YUKI, MORURU_YAMIYONO],
    },
    {
        id: 'b81f72e0-77d3-47f8-a355-ce71d2e71fbb',
        name: 'ゆずでび',
        performerIds: [YUZU_HASSAKU, DEBIDEBI_DEBIRU],
    },
    {
        id: '0c2c1a1d-21b0-4337-8410-49b14f2ed62d',
        name: '楽陽',
        performerIds: [RIRI_YUHI, GAKU_FUSHIMI],
    },
    {
        id: '01da1f9d-407a-4da6-a9ca-af3b75a885f3',
        name: 'ラタトゥイユ焼鮭',
        performerIds: [MIREI_GUNDO, MARIN_HAYAMA],
    },
    {
        id: 'cae36061-4410-4493-a527-45f5a263a488',
        name: 'リゼアン',
        performerIds: [ANGE_KATRINA, LIZE_HELESTA],
    },
    {
        id: '15557b50-0863-44f1-bce3-fa29fa5e3e61',
        name: 'りむみゃあ',
        performerIds: [MAKAINO_RIRIMU, RION_TAKAMIYA],
    },
    {
        id: '738c9c39-fd18-45f1-84bd-5d7147f8c340',
        name: 'りりぃろーず',
        performerIds: [RION_TAKAMIYA, LIZE_HELESTA],
    },
    {
        id: 'c8b42c73-1e32-45d3-b51f-b55ceb731428',
        name: 'リリかざ',
        performerIds: [RIRI_YUHI, KAZAKI_MORINAKA],
    },
    {
        id: 'e6454406-3b0d-4eb6-bcfc-74d8f986c396',
        name: 'RRR',
        performerIds: [RION_TAKAMIYA, MIKOTO_RINDOU, JOE_RIKIICHI],
    },
    {
        id: '23f656b3-d235-46ca-a302-0e5673d4f37e',
        name: 'りんかえW',
        performerIds: [KAEDE_HIGUCHI, RIN_SHIZUKA],
    },
    // {
    //   id: '57d3c123-0bb6-4ea3-a5e4-9a10f5d9a386',
    //   name: 'ルーザーキングス',
    //   performerIds: [MAKAINO_RIRIMU, KUZUHA, KOU_UZUKI],
    // },
    {
        id: '30e14b8d-3aed-423c-a4cf-2d8ee140d5ac',
        name: 'le jouet',
        performerIds: [RYUSHEN, KAKERU_YUMEOI, HAYATO_KAGAMI],
    },
    {
        id: '04207d47-e9bf-4164-b63a-44efb9a8c251',
        name: 'ロリ組',
        performerIds: [
            CHIHIRO_YUKI,
            ICHIGO_USHIMI,
            ALICE_MONONOBE,
            KAZAKI_MORINAKA,
        ],
    },
];
exports.matchTeamFromPerformerIds = function (performerIds) {
    var matchedGroup = exports.teams.find(function (team) {
        return team.performerIds.every(function (id) { return performerIds.includes(id); }) &&
            team.performerIds.length === performerIds.length;
    });
    if (!matchedGroup) {
        return;
    }
    return matchedGroup;
};
