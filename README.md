# manifest-grabber

Simple tool to grab the manifest from steam 

## Usage

```bash
npm install -g https://github.com/cs2-analysis/manifest-grabber
manifest-grabber [-u <username> -p <password>] <appId> <depotId> <manifestId>
```

### Example output for `manifest-grabber 730 2347771 3307757191311603570` (file list truncated)

```json
{
  "files": [
    {
      "chunks": [
        {
          "sha": "2772ecd3ee3e3da1d1395f7a2a774aabb412d704",
          "crc": 2606297579,
          "offset": "0",
          "cb_original": 372832,
          "cb_compressed": 139664
        }
      ],
      "filename": "game\\bin\\win64\\schemasystem.dll",
      "size": "372832",
      "flags": 0,
      "sha_filename": "be4ecfc824a45c9d1b4d04924103e1415a48653b",
      "sha_content": "2772ecd3ee3e3da1d1395f7a2a774aabb412d704",
      "linktarget": null
    },
    {
      "chunks": [
        {
          "sha": "11c1bf3ceb4d701c45989a19194a58b411e51b29",
          "crc": 944826312,
          "offset": "0",
          "cb_original": 195680,
          "cb_compressed": 84608
        }
      ],
      "filename": "game\\bin\\win64\\v8system.dll",
      "size": "195680",
      "flags": 0,
      "sha_filename": "bce6df3d804e04d000c5bc19300f9f0efec0d8fd",
      "sha_content": "11c1bf3ceb4d701c45989a19194a58b411e51b29",
      "linktarget": null
    }
  ],
  "depot_id": 2347771,
  "gid_manifest": "3307757191311603570",
  "creation_time": 1731017462,
  "filenames_encrypted": false,
  "cb_disk_original": "797115831",
  "cb_disk_compressed": "462358512",
  "unique_chunks": 837,
  "crc_encrypted": 666938823,
  "crc_clear": 0
}
```